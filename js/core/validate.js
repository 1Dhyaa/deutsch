// website/js/core/validate.js — Schema and Content Validator
// Works identically in Browser and Node.js environments.

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.DM = root.DM || {};
    root.DM.validate = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const Validator = {
    // Validate a single Lesson object
    validateLesson(lesson) {
      const errors = [];
      const warnings = [];

      if (!lesson || typeof lesson !== 'object') {
        return { valid: false, errors: ['Lesson must be an object'], warnings: [] };
      }

      // 1. Mandatory metadata
      if (!lesson.id || typeof lesson.id !== 'string') errors.push('Missing or invalid lesson.id');
      if (!lesson.title || typeof lesson.title !== 'object') {
        errors.push('Missing lesson.title object');
      } else {
        if (!lesson.title.de) errors.push('Missing lesson.title.de');
        if (!lesson.title.ar) errors.push('Missing lesson.title.ar');
      }
      if (!lesson.goal || typeof lesson.goal !== 'string') warnings.push('Missing or short lesson.goal');

      // 2. Explanation
      if (!Array.isArray(lesson.explanation) || lesson.explanation.length === 0) {
        errors.push('lesson.explanation must be a non-empty array');
      }

      // 3. Examples (minimum 8 for standard lessons)
      if (!Array.isArray(lesson.examples)) {
        errors.push('lesson.examples must be an array');
      } else if (lesson.examples.length < 8) {
        warnings.push(`Expected at least 8 examples, got ${lesson.examples.length}`);
      } else {
        lesson.examples.forEach((ex, idx) => {
          if (!ex.de) errors.push(`Example #${idx + 1} missing German text (de)`);
          if (!ex.ar) errors.push(`Example #${idx + 1} missing Arabic text (ar)`);
        });
      }

      // 4. Vocabulary (minimum 5 words)
      if (!Array.isArray(lesson.vocabulary)) {
        errors.push('lesson.vocabulary must be an array');
      } else if (lesson.vocabulary.length < 5) {
        warnings.push(`Vocabulary list has only ${lesson.vocabulary.length} entries`);
      }

      // 5. Exercises (10 tasks)
      if (!Array.isArray(lesson.exercises)) {
        errors.push('lesson.exercises must be an array');
      } else if (lesson.exercises.length < 10) {
        warnings.push(`Expected 10 exercises, got ${lesson.exercises.length}`);
      }

      // 6. Quiz (5 questions)
      if (!Array.isArray(lesson.quiz)) {
        errors.push('lesson.quiz must be an array');
      } else if (lesson.quiz.length < 5) {
        warnings.push(`Expected 5 quiz questions, got ${lesson.quiz.length}`);
      } else {
        lesson.quiz.forEach((q, idx) => {
          if (!q.question) errors.push(`Quiz question #${idx + 1} missing question text`);
          if (!Array.isArray(q.options) || q.options.length < 3) errors.push(`Quiz question #${idx + 1} must have at least 3 options`);
          if (typeof q.answer !== 'number' || q.answer < 0 || (q.options && q.answer >= q.options.length)) {
            errors.push(`Quiz question #${idx + 1} has invalid answer index (${q.answer})`);
          }
        });
      }

      return {
        valid: errors.length === 0,
        errors,
        warnings
      };
    },

    // Validate a Goethe Exam object (Lesen, Hören, Schreiben, Sprechen)
    validateExam(exam) {
      const errors = [];
      const warnings = [];

      if (!exam || typeof exam !== 'object') {
        return { valid: false, errors: ['Exam must be an object'], warnings: [] };
      }

      if (!exam.id) errors.push('Missing exam.id');
      if (!exam.level) errors.push('Missing exam.level');
      if (!exam.module) errors.push('Missing exam.module');
      if (!exam.durationMinutes || exam.durationMinutes <= 0) errors.push('Invalid exam.durationMinutes');
      if (!exam.teile || !Array.isArray(exam.teile) || exam.teile.length === 0) {
        errors.push('Exam must have a non-empty "teile" array');
        return { valid: false, errors, warnings };
      }

      // Module-specific item counts
      if (exam.module === 'lesen') {
        if (exam.level === 'b2') {
          if (exam.teile.length !== 5) warnings.push(`B2 Lesen expected 5 Teile, got ${exam.teile.length}`);
          const totalItems = exam.teile.reduce((sum, t) => sum + (t.questions ? t.questions.length : 0), 0);
          if (totalItems !== 30) warnings.push(`B2 Lesen expected 30 graded items, got ${totalItems}`);
        }
      } else if (exam.module === 'hoeren') {
        if (exam.level === 'b2') {
          if (exam.teile.length !== 4) warnings.push(`B2 Hören expected 4 Teile, got ${exam.teile.length}`);
          const totalItems = exam.teile.reduce((sum, t) => sum + (t.questions ? t.questions.length : 0), 0);
          if (totalItems !== 30) warnings.push(`B2 Hören expected 30 graded items, got ${totalItems}`);
        }
      } else if (exam.module === 'schreiben') {
        if (exam.teile.length !== 2) warnings.push(`B2 Schreiben expected 2 Teile, got ${exam.teile.length}`);
      } else if (exam.module === 'sprechen') {
        if (exam.teile.length !== 2) warnings.push(`B2 Sprechen expected 2 Teile, got ${exam.teile.length}`);
      }

      // Inspect each Teil
      exam.teile.forEach((teil, tIdx) => {
        if (!teil.teilNumber) errors.push(`Teil at index ${tIdx} missing teilNumber`);
        if (!teil.title) errors.push(`Teil ${teil.teilNumber || tIdx + 1} missing title`);

        if (Array.isArray(teil.questions)) {
          teil.questions.forEach((q, qIdx) => {
            const qNum = q.number || `${tIdx + 1}.${qIdx + 1}`;
            if (!q.question && !q.statement && !q.situation) {
              errors.push(`Teil ${teil.teilNumber} Question ${qNum} has no question text`);
            }
            if (q.options) {
              if (!Array.isArray(q.options) || q.options.length < 2) {
                errors.push(`Teil ${teil.teilNumber} Question ${qNum} options must have >= 2 choices`);
              }
              if (typeof q.answer !== 'number' && typeof q.answer !== 'string') {
                errors.push(`Teil ${teil.teilNumber} Question ${qNum} has missing/invalid answer`);
              }
            }
          });
        }
      });

      return {
        valid: errors.length === 0,
        errors,
        warnings
      };
    },

    // Validate Funktionsverben dataset (60 entries)
    validateFunktionsverben(list) {
      const errors = [];
      const warnings = [];

      if (!Array.isArray(list)) {
        return { valid: false, errors: ['Funktionsverben dataset must be an array'], warnings: [] };
      }

      if (list.length < 60) {
        warnings.push(`Expected 60 Funktionsverben pairs, got ${list.length}`);
      }

      list.forEach((item, idx) => {
        const id = item.id || `#${idx + 1}`;
        if (!item.gefuege) errors.push(`Entry ${id} missing gefuege`);
        if (!item.verb) errors.push(`Entry ${id} missing verb`);
        if (!item.simpleVerb) errors.push(`Entry ${id} missing simpleVerb`);
        if (!item.meaningAr) errors.push(`Entry ${id} missing meaningAr`);
        if (!item.exampleDe) errors.push(`Entry ${id} missing exampleDe`);
        if (!item.exampleAr) errors.push(`Entry ${id} missing exampleAr`);
      });

      return {
        valid: errors.length === 0,
        errors,
        warnings
      };
    }
  };

  return Validator;
});
