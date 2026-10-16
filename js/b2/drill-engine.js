// website/js/b2/drill-engine.js — B2 Generic Rapid Drill Engine
// Interactive drill runner for Doppelkonnektoren, Genitiv-Präpositionen, and B2 grammar.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const DrillEngine = {
    currentType: null,
    drills: [],
    currentIndex: 0,
    score: 0,
    answered: false,

    async start(type, containerEl) {
      this.currentType = type;
      this.currentIndex = 0;
      this.score = 0;
      this.answered = false;

      const container = containerEl || document.getElementById('app-content');
      container.innerHTML = '<div class="spinner"></div>';

      try {
        let datasetUrl = '';
        if (type === 'doppelkonnektoren') {
          datasetUrl = 'data/b2/doppelkonnektoren.json';
        } else if (type === 'genitiv-praepositionen' || type === 'genitiv') {
          datasetUrl = 'data/b2/genitiv-praepositionen.json';
        }

        let data;
        if (window.DM && window.DM.lazy) {
          data = await window.DM.lazy.loadJson(datasetUrl);
        } else {
          const res = await fetch(datasetUrl);
          data = await res.json();
        }

        this.drills = data.drills || [];
        this.render(container);
      } catch (err) {
        container.innerHTML = `<div class="card text-center" style="padding:40px;"><h2>Fehler beim Laden</h2><p>${Utils.escapeHtml(err.message)}</p></div>`;
      }
    },

    render(containerEl) {
      const container = containerEl || document.getElementById('app-content');
      if (!container) return;

      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      const current = this.drills[this.currentIndex];

      if (!current) {
        this.renderResults(container);
        return;
      }

      container.innerHTML = `
        <div class="content-container fade-in" style="max-width:640px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <a href="#/cheatsheets" class="btn btn-secondary btn-sm">
              ➔ ${isDe ? 'Zurück zu Spickzetteln' : 'العودة للملخصات'}
            </a>
            <span class="badge" style="background:var(--accent); color:#fff; font-weight:700;">
              ${this.currentIndex + 1} / ${this.drills.length}
            </span>
          </div>

          <div class="card" style="padding:28px 24px; margin-bottom:20px;">
            <span style="font-size:0.85rem; color:var(--text-muted); font-weight:700; text-transform:uppercase; display:block; margin-bottom:8px;">
              ${isDe ? 'Aufgabe lösen:' : 'اختر الإجابة الصحيحة لإكمال الجملة:'}
            </span>
            <div class="de-text" dir="ltr" style="font-size:1.35rem; font-weight:700; color:var(--text-primary); line-height:1.6; margin-bottom:12px;">
              ${Utils.escapeHtml(current.question)}
            </div>
            <button type="button" class="audio-btn" onclick="Speech.speak('${current.question.replace(/_____/g, 'etwas').replace(/'/g, "\\'")}')" title="استمع">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.08"/></svg>
            </button>
          </div>

          <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:20px;">
            ${current.options.map((opt, idx) => `
              <button type="button" 
                      class="btn btn-secondary drill-opt-btn de-text" 
                      dir="ltr" 
                      data-idx="${idx}"
                      style="padding:16px 20px; font-size:1.1rem; justify-content:flex-start; text-align:start;"
                      onclick="DM.drill.checkAnswer(${idx})">
                <span class="badge" style="margin-inline-end:10px; background:var(--bg-primary);">${String.fromCharCode(65 + idx)}</span>
                <span>${Utils.escapeHtml(opt)}</span>
              </button>
            `).join('')}
          </div>

          <!-- Feedback Box -->
          <div id="drill-feedback-box" style="display:none; margin-bottom:20px;"></div>

          <div id="drill-next-action" style="display:none; text-align:end;">
            <button type="button" class="btn btn-primary" onclick="DM.drill.nextQuestion()">
              ${isDe ? 'Nächste Frage' : 'السؤال التالي'} ➔
            </button>
          </div>
        </div>
      `;
    },

    checkAnswer(selectedIdx) {
      if (this.answered) return;
      this.answered = true;

      const current = this.drills[this.currentIndex];
      const isCorrect = (selectedIdx === current.answer);
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();

      // Highlight buttons
      document.querySelectorAll('.drill-opt-btn').forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === current.answer) {
          btn.style.background = 'var(--success)';
          btn.style.color = '#fff';
        } else if (idx === selectedIdx && !isCorrect) {
          btn.style.background = 'var(--danger)';
          btn.style.color = '#fff';
        }
      });

      if (isCorrect) {
        this.score += 1;
        if (window.Storage) window.Storage.addXP(10);
      } else {
        if (window.Storage) {
          window.Storage.addMistake({
            lessonId: `b2-drill-${this.currentType}`,
            question: current.question,
            myAnswer: current.options[selectedIdx],
            correctAnswer: current.options[current.answer],
            explanation: current.explanation
          });
        }
      }

      // Show Feedback Box
      const feedbackBox = document.getElementById('drill-feedback-box');
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <div class="card" style="padding:16px 20px; border-left:4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}; background:var(--bg-primary);">
            <div style="font-weight:700; color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:6px; font-size:1.05rem;">
              ${isCorrect ? (isDe ? '✓ Richtig!' : '✓ إجابة صحيحة!') : (isDe ? '✗ Leider falsch' : '✗ إجابة غير صحيحة')}
            </div>
            <div style="font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">
              💡 <strong>${isDe ? 'Erklärung:' : 'التوضيح النحوي:'}</strong> ${Utils.escapeHtml(current.explanation)}
            </div>
          </div>
        `;
      }

      const nextAction = document.getElementById('drill-next-action');
      if (nextAction) nextAction.style.display = 'block';
    },

    nextQuestion() {
      this.currentIndex += 1;
      this.answered = false;
      this.render();
    },

    renderResults(containerEl) {
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      const percent = Math.round((this.score / this.drills.length) * 100);

      containerEl.innerHTML = `
        <div class="content-container fade-in" style="max-width:560px; text-align:center; padding:32px 16px;">
          <div class="card" style="padding:36px 24px;">
            <div style="font-size:3.5rem; margin-bottom:12px;">${percent >= 60 ? '🏆' : '💪'}</div>
            <h2 style="font-size:1.6rem; font-weight:800; margin-bottom:8px;">
              ${isDe ? 'Drill abgeschlossen!' : 'اكتمل التدريب السريع!'}
            </h2>
            <div style="font-size:2.4rem; font-weight:800; color:${percent >= 60 ? 'var(--success)' : 'var(--warning)'}; margin-bottom:10px;">
              ${this.score} / ${this.drills.length} (${percent}%)
            </div>
            <p style="color:var(--text-secondary); margin-bottom:24px;">
              ${percent >= 60 
                ? (isDe ? 'Ausgezeichnete Beherrschung der Grammatik!' : 'أداء رائع وإتقان متميز للقواعد!') 
                : (isDe ? 'Wiederhole den Drill noch einmal, um die Regeln zu festigen.' : 'راجع الشرح وأعد التدريب لتثبيت القاعدة.')}
            </p>
            <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
              <button type="button" class="btn btn-primary" onclick="DM.drill.start('${this.currentType}')">
                🔄 ${isDe ? 'Nochmal üben' : 'إعادة التدريب'}
              </button>
              <a href="#/cheatsheets" class="btn btn-secondary">
                📑 ${isDe ? 'Zu den Spickzetteln' : 'العودة للملخصات'}
              </a>
            </div>
          </div>
        </div>
      `;
    }
  };

  window.DM.drill = DrillEngine;
})();
