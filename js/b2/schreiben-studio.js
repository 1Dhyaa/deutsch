// website/js/b2/schreiben-studio.js — Goethe-Zertifikat B2 Schreiben Simulator & Studio
// Interactive writing studio for Goethe B2 Module Schreiben (Teil 1: Forumsbeitrag, Teil 2: Formelle Nachricht)

(function () {
  'use strict';

  window.DM = window.DM || {};

  const B2SchreibenStudio = {
    currentTaskIndex: 0,
    STORAGE_KEY: 'dmx.b2_schreiben_drafts',

    tasks: [
      {
        id: 'b2-schreiben-t1-oepnv',
        teil: 1,
        type: 'forum',
        titleDe: 'Teil 1: Forumsbeitrag — Kostenloser öffentlicher Nahverkehr (ÖPNV)',
        titleAr: 'الجزء 1: منشور منتدى — مجانية وسائل النقل العام في المدن',
        minWords: 140,
        targetWords: 160,
        maxWords: 200,
        timeLimitMinutes: 45,
        contextDe: 'Sie schreiben einen Forumsbeitrag zur aktuellen Diskussion über die Einführung eines kostenlosen öffentlichen Nahverkehrs in deutschen Großstädten.',
        contextAr: 'أنت تكتب منشوراً في منتدى نقاشي شبابي حول المبادرة المطروحة لجعل جميع وسائل النقل العام (حافلات، قطارات، مترو) مجانية للمواطنين.',
        leitpunkte: [
          { id: 'lp1', de: 'Äußern Sie Ihre Meinung zum kostenlosen ÖPNV und begründen Sie diese.', ar: 'عبّر عن رأيك في مجانية النقل العام مع التعليل المقنع.' },
          { id: 'lp2', de: 'Nennen Sie Gründe, warum dieses Thema derzeit so intensiv diskutiert wird.', ar: 'اذكر الأسباب التي تجعل هذا الموضوع محل نقاش ساخن حالياً (البيئة، أزمة المناخ، الغلاء).' },
          { id: 'lp3', de: 'Schlagen Sie eine andere Möglichkeit vor, wie der Autoverkehr in Innenstädten reduziert werden könnte.', ar: 'اقترح بديلاً أو فكرة أخرى لتقليل ازدحام السيارات في مراكز المدن.' },
          { id: 'lp4', de: 'Erläutern Sie die Vor- und Nachteile Ihres alternativen Vorschlags.', ar: 'وضّح إيجابيات وسلبيات البديل المقترح الذي قدمته.' }
        ],
        redemittel: {
          meinung: [
            'Meiner Auffassung nach ist die Einführung von...',
            'Ich bin der festen Überzeugung, dass...',
            'Aus meiner persönlichen Sicht spricht vieles dafür / dagegen, dass...'
          ],
          begruendung: [
            'Ein entscheidender Grund für diese Entwicklung liegt darin, dass...',
            'Dies lässt sich vor allem darauf zurückführen, dass...',
            'Aufgrund der steigenden Umweltbelastung ist es unabdingbar, dass...'
          ],
          alternativen: [
            'Eine sinnvolle Alternative dazu wäre...',
            'Anstelle eines kostenlosen Angebots könnte man in Betracht ziehen, dass...',
            'Als weitere Maßnahme bietet es sich an,...'
          ],
          abwaegung: [
            'Einerseits bietet dieser Ansatz den Vorteil, dass..., andererseits muss man bedenken, dass...',
            'Zwar ist diese Lösung äußerst wirksam, aber sie erfordert erhebliche Investitionen.',
            'Nicht nur die Umwelt würde davon profitieren, sondern auch...'
          ]
        },
        musterloesung: `In der heutigen Zeit wird die Frage, ob der öffentliche Nahverkehr für alle Bürger kostenlos sein sollte, intensiv diskutiert. Meiner Auffassung nach wäre ein gebührenfreier ÖPNV ein bahnbrechender Schritt in Richtung einer klimaneutralen und gerechten Gesellschaft.

Der Hauptgrund für diese Debatte liegt in der dramatischen Zuspitzung der Klimakrise und den ständigen Verkehrsinfarkten in unseren Ballungsräumen. Viele Menschen würden das Auto gerne stehen lassen, werden jedoch von überteuerten Ticketpreisen und unübersichtlichen Tarifzonen abgeschreckt. Ein kostenloser Nahverkehr würde hier eine direkte soziale und finanzielle Entlastung bedeuten.

Als ergänzende Alternative sollte jedoch vor allem der massive Ausbau von Fahrradschnellwegen und autofreien Innenstadtzonen in Betracht gezogen werden. Einerseits sorgt dieser Ansatz für mehr Lebensqualität und sauberere Luft, andererseits könnten dadurch ältere oder gehbehinderte Bürger benachteiligt werden, wenn sie nicht mehr direkt vor Geschäfte fahren können.

Zusammenfassend bin ich überzeugt, dass nicht nur der Preis, sondern auch die Verlässlichkeit und Taktung des Verkehrsangebots entscheidend sind, um eine echte Mobilitätswende zu erreichen.`
      },
      {
        id: 'b2-schreiben-t2-reklamation',
        teil: 2,
        type: 'formell',
        titleDe: 'Teil 2: Formelle Beschwerde — Mängel bei beruflicher Weiterbildung',
        titleAr: 'الجزء 2: رسالة رسمية — شكوى بخصوص دورة تدريبية مهنية وتأخر الشهادة',
        minWords: 90,
        targetWords: 110,
        maxWords: 140,
        timeLimitMinutes: 30,
        contextDe: 'Sie haben an einem einmonatigen Fachseminar "Projektmanagement B2" teilgenommen. Wichtige Module sind ausgefallen und Ihr offizielles Zertifikat wurde Ihnen nach vier Wochen noch nicht zugesandt. Schreiben Sie eine formelle Nachricht an die Institutsleitung.',
        contextAr: 'شاركت في دورة تدريبية مكثفة حول "إدارة المشاريع". تم إلغاء أجزاء ومحاضرات أساسية، وتأخر إرسال الشهادة المعتمدة لأكثر من شهر. اكتب رسالة رسمية حازمة لمدير المعهد.',
        leitpunkte: [
          { id: 'lp1', de: 'Schreiben Sie eine passende formelle Anrede und nennen Sie den Grund Ihres Schreibens.', ar: 'اكتب تحية رسمية صحيحة واذكر سبب الرسالة وتاريخ الدورة بدقة.' },
          { id: 'lp2', de: 'Beschreiben Sie sachlich, welche Mängel während des Seminars aufgetreten sind.', ar: 'صف باحترافية المشاكل والقصور الذي حدث (إلغاء محاضرات، عدم توفر المواد).' },
          { id: 'lp3', de: 'Fordern Sie die sofortige Zusendung des Zertifikats und eine angemessene Teilrückerstattung.', ar: 'طالب بالإرسال العاجل للشهادة المعتمدة مع استرداد جزء من رسوم الدورة.' },
          { id: 'lp4', de: 'Setzen Sie eine konkrete Frist und verwenden Sie eine formelle Grußformel.', ar: 'حدد مهلة زمنية قاطعة (Frist) واختم بالتحية الرسمية المناسبة.' }
        ],
        redemittel: {
          anrede: [
            'Sehr geehrte Damen und Herren,',
            'Sehr geehrte Frau Dr. Meyer, / Sehr geehrter Herr Direktor Schmidt,'
          ],
          einleitung: [
            'ich wende mich an Sie bezüglich des Seminars..., an dem ich vom... bis... teilgenommen habe.',
            'mit diesem Schreiben möchte ich meine große Unzufriedenheit über den Ablauf von... zum Ausdruck bringen.'
          ],
          forderung: [
            'Aus diesem Grund fordere ich Sie hiermit auf, mir das Zertifikat unverzüglich zukommen zu lassen.',
            'Angesichts der ausgefallenen Module halte ich eine Erstattung von 30 % der Kursgebühren für angemessen.'
          ],
          abschluss: [
            'Ich setze Ihnen für die Erledigung eine Frist bis zum [Datum].',
            'Sollte ich bis zu diesem Termin keine Rückmeldung erhalten, behalte ich mir weitere rechtliche Schritte vor.',
            'Mit freundlichen Grüßen'
          ]
        },
        musterloesung: `Sehr geehrte Damen und Herren,

ich wende mich an Sie bezüglich des Weiterbildungsseminars "Agiles Projektmanagement", an dem ich vom 1. bis zum 28. September teilgenommen habe. Leider entsprach die Durchführung des Kurses in keiner Weise den vertraglichen Zusagen.

Zwei wesentliche Fachmodule fielen wegen Krankheit des Dozenten ersatzlos aus, und die versprochenen digitalen Übungsmaterialien wurden uns bis heute nicht zur Verfügung gestellt. Darüber hinaus habe ich mein offizielles Abschlusszertifikat trotz mehrfacher telefonischer Nachfrage noch immer nicht erhalten, was meine aktuellen Bewerbungsverfahren erheblich beeinträchtigt.

Aus diesen Gründen fordere ich Sie hiermit auf, mir das Zertifikat umgehend zuzusenden und mir einen Betrag in Höhe von 30 Prozent der Kursgebühr auf mein Bankkonto zu erstatten. Für die Erledigung setze ich Ihnen eine Frist bis zum 15. November.

Mit freundlichen Grüßen
Samir Al-Mansur`
      }
    ],

    render(containerEl) {
      const container = containerEl || document.getElementById('app-content');
      if (!container) return;

      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      if (window.App && window.App.setBreadcrumb) {
        window.App.setBreadcrumb(isDe ? 'B2 Schreiben Studio / Goethe-Zertifikat' : 'محاكي التعبير الكتابي / Goethe B2 Schreiben');
      }

      const task = this.tasks[this.currentTaskIndex];
      const savedDraft = this.loadDraft(task.id);

      container.innerHTML = `
        <div class="content-container fade-in">
          <!-- Header -->
          <div class="section-header" style="margin-bottom:20px;">
            <div>
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                <span class="badge" style="background:var(--accent); color:#fff; font-weight:700;">GOETHE B2 SCHREIBEN</span>
                <span class="badge" style="background:var(--border-light); color:var(--text-secondary);">75 Minuten | 100 Punkte</span>
              </div>
              <h1 class="section-title">${isDe ? task.titleDe : task.titleAr}</h1>
              <p class="section-subtitle">${isDe ? task.contextDe : task.contextAr}</p>
            </div>

            <!-- Task Switcher Buttons -->
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
              <button type="button" class="btn ${this.currentTaskIndex === 0 ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.b2SchreibenStudio.switchTask(0)">
                📝 Teil 1: Forumsbeitrag (150 W.)
              </button>
              <button type="button" class="btn ${this.currentTaskIndex === 1 ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.b2SchreibenStudio.switchTask(1)">
                ✉️ Teil 2: Formelle Nachricht (100 W.)
              </button>
            </div>
          </div>

          <!-- Main Layout: Editor & Side Tools -->
          <div style="display:grid; grid-template-columns: 1fr 340px; gap:20px; align-items:start;" class="b2-schreiben-grid">
            
            <!-- Left Column: Writing Area -->
            <div>
              <!-- Leitpunkte Box -->
              <div class="card" style="margin-bottom:16px; border-left:4px solid var(--accent); padding:18px;">
                <h3 style="margin-top:0; font-size:1.05rem; display:flex; align-items:center; gap:8px; color:var(--text-primary);">
                  <span>📋</span>
                  <span>${isDe ? 'Vier verbindliche Leitpunkte (alle müssen behandelt werden):' : 'النقاط الأربع الإجبارية (يجب تغطيتها جميعاً):'}</span>
                </h3>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">
                  ${task.leitpunkte.map((lp, idx) => `
                    <label style="display:flex; align-items:flex-start; gap:10px; cursor:pointer; font-size:0.92rem; line-height:1.5;">
                      <input type="checkbox" id="chk-${lp.id}" style="margin-top:3px; width:17px; height:17px; accent-color:var(--accent);">
                      <span>
                        <strong class="de-text" dir="ltr" style="display:block; color:var(--text-primary);">${idx + 1}. ${Utils.escapeHtml(lp.de)}</strong>
                        <span style="color:var(--text-muted); font-size:0.85rem;">${Utils.escapeHtml(lp.ar)}</span>
                      </span>
                    </label>
                  `).join('')}
                </div>
              </div>

              <!-- Textarea Editor -->
              <div class="card" style="padding:18px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
                  <span style="font-weight:700; font-size:0.95rem; color:var(--text-secondary);">
                    ✍️ ${isDe ? 'Ihr Textentwurf (Deutsch B2)' : 'مساحة كتابة النص الخاص بك:'}
                  </span>
                  <!-- Realtime Word Count Pill -->
                  <div id="b2-word-counter-pill" class="badge" style="font-size:0.9rem; padding:6px 12px; background:var(--bg-primary); border:1px solid var(--border);">
                    0 / ${task.targetWords} Wörter
                  </div>
                </div>

                <textarea id="b2-schreiben-input" class="de-text" dir="ltr" 
                  placeholder="${task.type === 'forum' ? 'Schreiben Sie hier Ihren Forumsbeitrag...' : 'Sehr geehrte Damen und Herren,\n\nich wende mich an Sie...'}"
                  style="width:100%; min-height:300px; padding:16px; border:1px solid var(--border); border-radius:var(--radius-md); font-family:var(--font-de); font-size:1rem; line-height:1.7; background:var(--bg-primary); color:var(--text-primary); resize:vertical;"
                  oninput="window.DM.b2SchreibenStudio.onTextChange()">${Utils.escapeHtml(savedDraft)}</textarea>

                <!-- Actions Bar -->
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:14px; flex-wrap:wrap; gap:10px;">
                  <div style="display:flex; gap:8px;">
                    <button type="button" class="btn btn-primary" onclick="window.DM.b2SchreibenStudio.evaluateText()">
                      🔍 ${isDe ? 'Text prüfen & bewerten' : 'فحص النص وتقييم B2 فورياً'}
                    </button>
                    <button type="button" class="btn btn-secondary" onclick="window.DM.b2SchreibenStudio.toggleMusterloesung()">
                      💡 ${isDe ? 'Musterlösung ansehen' : 'عرض نموذج الإجابة المثالي'}
                    </button>
                  </div>
                  <button type="button" class="btn btn-outline btn-sm" onclick="window.DM.b2SchreibenStudio.clearDraft()">
                    🗑️ ${isDe ? 'Entwurf löschen' : 'مسح المسودة'}
                  </button>
                </div>
              </div>

              <!-- Instant Feedback Card (Rendered on check) -->
              <div id="b2-schreiben-feedback-container" style="margin-top:16px;"></div>

              <!-- Model Answer Card -->
              <div id="b2-schreiben-model-container" class="card" style="margin-top:16px; display:none; border:2px solid var(--accent); background:var(--bg-card);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                  <h3 style="margin:0; color:var(--accent); display:flex; align-items:center; gap:8px;">
                    <span>🏆</span>
                    <span>${isDe ? 'Musterlösung auf B2-Spitzenniveau' : 'نموذج إجابة مثالي لعلامة كاملة في B2'}</span>
                  </h3>
                  <button type="button" class="btn btn-secondary btn-sm" onclick="Speech.speak(document.getElementById('b2-model-text').innerText)">
                    🔊 استمع للنموذج
                  </button>
                </div>
                <div id="b2-model-text" class="de-text" dir="ltr" style="white-space:pre-wrap; line-height:1.75; font-size:0.95rem; padding:12px; background:var(--bg-primary); border-radius:var(--radius-sm);">
                  ${Utils.escapeHtml(task.musterloesung)}
                </div>
              </div>
            </div>

            <!-- Right Column: B2 Redemittel Baukasten -->
            <div>
              <div class="card" style="position:sticky; top:80px; padding:18px;">
                <h3 style="margin-top:0; font-size:1.1rem; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
                  <span>⭐</span>
                  <span>${isDe ? 'B2-Redemittel-Baukasten' : 'بنك التعابير والروابط B2'}</span>
                </h3>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
                  ${isDe ? 'Klicken Sie auf eine Phrase, um sie direkt in Ihren Text einzufügen:' : 'اضغط على أي عبارة لإدراجها فوراً في مكان المؤشر داخل نصك:'}
                </p>

                <div style="display:flex; flex-direction:column; gap:14px; max-height:550px; overflow-y:auto; padding-right:4px;">
                  ${Object.entries(task.redemittel).map(([cat, phrases]) => `
                    <div>
                      <strong style="font-size:0.85rem; text-transform:uppercase; color:var(--accent); letter-spacing:0.5px; display:block; margin-bottom:6px;">
                        ${cat === 'meinung' ? '🗣️ إبداء الرأي (Meinung)' :
                          cat === 'begruendung' ? '💡 التعليل والسبب (Begründung)' :
                          cat === 'alternativen' ? '🔄 اقتراح بدائل (Alternativen)' :
                          cat === 'abwaegung' ? '⚖️ مقارنة إيجابيات وسلبيات' :
                          cat === 'anrede' ? '🤝 التحية الرسمية' :
                          cat === 'einleitung' ? '📌 المقدمة وتحديد السبب' :
                          cat === 'forderung' ? '⚡ المطالب المحددة' : '📝 الخاتمة والمهلة'}
                      </strong>
                      <div style="display:flex; flex-direction:column; gap:6px;">
                        ${phrases.map(p => `
                          <button type="button" class="btn btn-secondary btn-sm de-text" dir="ltr" 
                            style="text-align:left; justify-content:flex-start; font-size:0.85rem; padding:6px 10px; white-space:normal; height:auto; line-height:1.4;"
                            onclick="window.DM.b2SchreibenStudio.insertPhrase('${p.replace(/'/g, "\\'")}')">
                            + ${Utils.escapeHtml(p)}
                          </button>
                        `).join('')}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

          </div>
        </div>
      `;

      this.onTextChange();
    },

    switchTask(idx) {
      this.currentTaskIndex = idx;
      this.render();
    },

    insertPhrase(phrase) {
      const textarea = document.getElementById('b2-schreiben-input');
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const current = textarea.value;
      const spaceBefore = (start > 0 && current[start - 1] !== ' ' && current[start - 1] !== '\n') ? ' ' : '';
      const spaceAfter = (end < current.length && current[end] !== ' ' && current[end] !== '\n') ? ' ' : '';
      textarea.value = current.substring(0, start) + spaceBefore + phrase + spaceAfter + current.substring(end);
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + spaceBefore.length + phrase.length + spaceAfter.length;
      this.onTextChange();
    },

    onTextChange() {
      const textarea = document.getElementById('b2-schreiben-input');
      const pill = document.getElementById('b2-word-counter-pill');
      if (!textarea || !pill) return;

      const text = textarea.value.trim();
      const words = text ? text.split(/\s+/).length : 0;
      const task = this.tasks[this.currentTaskIndex];

      this.saveDraft(task.id, textarea.value);

      let color = 'var(--text-secondary)';
      let statusText = '';
      if (words === 0) {
        statusText = '0 Wörter';
      } else if (words < task.minWords) {
        color = 'var(--warning)';
        statusText = `⚠️ ${words} / ${task.minWords} Wörter (zu kurz)`;
      } else if (words <= task.maxWords) {
        color = 'var(--success)';
        statusText = `✅ ${words} Wörter (Optimale Länge)`;
      } else {
        color = 'var(--accent)';
        statusText = `ℹ️ ${words} Wörter (Ausführlich)`;
      }

      pill.innerHTML = `<span style="color:${color}; font-weight:700;">${statusText}</span>`;
    },

    evaluateText() {
      const textarea = document.getElementById('b2-schreiben-input');
      const container = document.getElementById('b2-schreiben-feedback-container');
      if (!textarea || !container) return;

      const text = textarea.value.trim();
      if (!text) {
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast('الرجاء كتابة نص أولاً لإجراء الفحص.', 'warning');
        }
        return;
      }

      const task = this.tasks[this.currentTaskIndex];
      const words = text.split(/\s+/).length;

      // 1. Check B2 Konnektoren
      const connectors = [
        { name: 'zwar ... aber', regex: /zwar.*aber/i },
        { name: 'nicht nur ... sondern auch', regex: /nicht\s+nur.*sondern\s+auch/i },
        { name: 'einerseits ... andererseits', regex: /einerseits.*andererseits/i },
        { name: 'sowohl ... als auch', regex: /sowohl.*als\s+auch/i },
        { name: 'deshalb / deswegen', regex: /\b(deshalb|deswegen|daher)\b/i },
        { name: 'trotzdem / dennoch', regex: /\b(trotzdem|dennoch)\b/i },
        { name: 'aufgrund (+ Genitiv)', regex: /\baufgrund\b/i },
        { name: 'infolgedessen / infolge', regex: /\binfolge\b/i },
        { name: 'anstelle / statt', regex: /\b(anstelle|statt)\b/i }
      ];
      const matchedConnectors = connectors.filter(c => c.regex.test(text));

      // 2. Check Paragraphs
      const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);

      // 3. Check Formality (for Teil 2)
      let greetingOk = true;
      let closingOk = true;
      if (task.type === 'formell') {
        greetingOk = /Sehr geehrte/i.test(text);
        closingOk = /Mit freundlichen Grüßen/i.test(text);
      }

      // Calculate provisional score out of 100
      let wordScore = Math.min(25, Math.round((words / task.minWords) * 25));
      let connectorScore = Math.min(25, matchedConnectors.length * 6);
      let structureScore = Math.min(25, (paragraphs.length >= 3 ? 25 : paragraphs.length * 8));
      let formalityScore = (task.type === 'formell') ? ((greetingOk ? 12 : 0) + (closingOk ? 13 : 0)) : 25;

      const totalScore = Math.min(100, wordScore + connectorScore + structureScore + formalityScore);
      const passed = totalScore >= 60;

      // Emit event for study tracker and XP
      if (window.DM && window.DM.bus) {
        window.DM.bus.emit('dm:xp', { amount: Math.round(totalScore / 2), source: 'b2_schreiben' });
      }

      container.innerHTML = `
        <div class="card fade-in" style="border:2px solid ${passed ? 'var(--success)' : 'var(--warning)'}; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:2rem;">${passed ? '🎉' : '⚠️'}</span>
              <div>
                <h3 style="margin:0; font-size:1.2rem; color:var(--text-primary);">
                  ${passed ? 'نتيجة ممتازة! النص يستوفي معايير Goethe B2' : 'مجهود جيد! النص يحتاج إلى بعض التطوير لاجتياز معايير B2'}
                </h3>
                <small style="color:var(--text-muted);">تقييم آلي استرشادي مبني على معايير تصحيح معهد غوته الرسمية</small>
              </div>
            </div>
            <div style="font-size:1.5rem; font-weight:800; color:${passed ? 'var(--success)' : 'var(--warning)'};">
              ${totalScore} / 100 Pkt.
            </div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:16px;">
            <div style="background:var(--bg-primary); padding:12px; border-radius:var(--radius-sm);">
              <strong>عدد الكلمات:</strong> ${words} / ${task.minWords}
              <div style="font-size:0.85rem; color:${words >= task.minWords ? 'var(--success)' : 'var(--danger)'};">
                ${words >= task.minWords ? '✅ الطول كافٍ ومطابق للمطلوب' : '❌ النص أقصر من الحد الأدنى'}
              </div>
            </div>
            <div style="background:var(--bg-primary); padding:12px; border-radius:var(--radius-sm);">
              <strong>الروابط المركبة (B2):</strong> ${matchedConnectors.length} روابط
              <div style="font-size:0.85rem; color:var(--text-secondary);">
                ${matchedConnectors.map(c => c.name).join(', ') || 'لم تُكتشف روابط B2 متقدمة'}
              </div>
            </div>
            <div style="background:var(--bg-primary); padding:12px; border-radius:var(--radius-sm);">
              <strong>تقسيم الفقرات:</strong> ${paragraphs.length} فقرات
              <div style="font-size:0.85rem; color:${paragraphs.length >= 3 ? 'var(--success)' : 'var(--warning)'};">
                ${paragraphs.length >= 3 ? '✅ تنظيم فقرات متناسق' : '⚠️ يفضل تقسيم النص إلى 3 فقرات على الأقل'}
              </div>
            </div>
            ${task.type === 'formell' ? `
              <div style="background:var(--bg-primary); padding:12px; border-radius:var(--radius-sm);">
                <strong>الأعراف الرسمية:</strong>
                <div style="font-size:0.85rem;">
                  ${greetingOk ? '✅ تحية رسمية صحيحة' : '❌ ينقص تحية رسمية مناسبة'}<br>
                  ${closingOk ? '✅ خاتمة رسمية صحيحة' : '❌ تنقص عبارة Mit freundlichen Grüßen'}
                </div>
              </div>
            ` : ''}
          </div>

          <div style="background:var(--accent-light); padding:12px; border-radius:var(--radius-sm); font-size:0.9rem; color:var(--text-primary);">
            💡 <strong>نصيحة الخبير لرفع درجتك:</strong> احرص دائماً على الإجابة عن النقاط الأربع (Leitpunkte) بالتسلسل، وتجنب الجمل القصيرة البسيطة واستبدلها بجمل فرعية وروابط مزدوجة (wie z. B. nicht nur ... sondern auch).
          </div>
        </div>
      `;
    },

    toggleMusterloesung() {
      const card = document.getElementById('b2-schreiben-model-container');
      if (!card) return;
      const isHidden = (card.style.display === 'none');
      card.style.display = isHidden ? 'block' : 'none';
      if (isHidden) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    },

    saveDraft(taskId, text) {
      try {
        const drafts = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
        drafts[taskId] = text;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(drafts));
      } catch (e) {
        console.error('Failed to save draft:', e);
      }
    },

    loadDraft(taskId) {
      try {
        const drafts = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
        return drafts[taskId] || '';
      } catch (e) {
        return '';
      }
    },

    clearDraft() {
      const task = this.tasks[this.currentTaskIndex];
      if (confirm('هل أنت متأكد من رغبتك في مسح هذا النص بالكامل؟')) {
        const textarea = document.getElementById('b2-schreiben-input');
        if (textarea) textarea.value = '';
        this.saveDraft(task.id, '');
        this.onTextChange();
      }
    }
  };

  window.DM.b2SchreibenStudio = B2SchreibenStudio;
})();
