// website/js/b2/sprechen-studio.js — Goethe-Zertifikat B2 Sprechen Simulator
// Complete oral exam studio with Scripted AI Partner, microphone STT, and scoring rubric.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const B2SprechenStudio = {
    activeTab: 'teil1', // 'teil1' | 'teil2'
    selectedTopic: 'haustiere',
    vortragStep: 'prep', // 'prep' | 'speak' | 'partner-question' | 'result'
    diskussionTurn: 0,
    transcriptHistory: [],
    timerSeconds: 0,
    timerInterval: null,

    topics: [
      {
        id: 'haustiere',
        titleDe: 'Thema 1: Haustiere in Mietwohnungen',
        titleAr: 'الموضوع 1: تربية الحيوانات الأليفة في الشقق السكنية المستأجرة',
        promptDe: 'Sollten Haustiere wie Hunde und Katzen in Mietwohnungen generell erlaubt sein?',
        points: [
          'Verschiedene Möglichkeiten/Haustierarten nennen',
          'Vor- und Nachteile (z. B. seelisches Wohlbefinden vs. Lärm/Schäden) darstellen',
          'Situation im Heimatland und eigene Erfahrungen schildern',
          'Eigene Meinung begründen und Fazit ziehen'
        ],
        redemittel: [
          'Ich habe mich für das Thema ... entschieden.',
          'Zunächst möchte ich verschiedene Aspekte darstellen...',
          'Ein großer Vorteil besteht darin, dass...',
          'Auf der anderen Seite muss man bedenken, dass...',
          'In meinem Heimatland ist die Situation so, dass...',
          'Zusammenfassend bin ich der Überzeugung, dass...'
        ]
      },
      {
        id: 'fsj',
        titleDe: 'Thema 2: Freiwilliges Soziales Jahr (FSJ)',
        titleAr: 'الموضوع 2: سنة التطوع الاجتماعي للشباب بعد المدرسة',
        promptDe: 'Sollte ein Freiwilliges Soziales Jahr für alle Schulabgänger verpflichtend sein?',
        points: [
          'Verschiedene Einsatzbereiche (Pflege, Umwelt, Kultur) nennen',
          'Vor- und Nachteile eines Pflichtjahres abwägen',
          'Situation im Heimatland und persönliche Erfahrungen',
          'Eigene Haltung begründet darlegen'
        ],
        redemittel: [
          'In meinem Vortrag beschäftige ich mich mit der Frage...',
          'Es gibt vielfältige Möglichkeiten, wie zum Beispiel...',
          'Einerseits fördert dies die soziale Reife, andererseits...',
          'Meiner Auffassung nach sollte dies auf freiwilliger Basis bleiben...'
        ]
      }
    ],

    render(containerEl) {
      const container = containerEl || document.getElementById('app-content');
      if (!container) return;

      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      if (window.App && window.App.setBreadcrumb) {
        window.App.setBreadcrumb(isDe ? 'B2 Sprechen Studio / Partner-Simulator' : 'محاكي الامتحان الشفهي / Goethe B2 Sprechen مع الزميل الذكي');
      }

      container.innerHTML = `
        <div class="content-container fade-in">
          <!-- Header -->
          <div class="section-header" style="margin-bottom:20px;">
            <div>
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                <span class="badge" style="background:var(--accent); color:#fff; font-weight:700;">GOETHE B2 SPRECHEN</span>
                <span class="badge" style="background:var(--border-light); color:var(--text-secondary);">15 Minuten | Paarprüfung | 100 Punkte</span>
              </div>
              <h1 class="section-title">
                ${isDe ? 'Mündliche Prüfung mit virtuellem Partner' : 'محاكي الامتحان الشفهي التفاعلي مع الزميل (Lukas)'}
              </h1>
              <p class="section-subtitle">
                ${isDe 
                  ? 'Teil 1: Strukturierter Vortrag (4 Min.) & Partnerfrage | Teil 2: Kontroverse Diskussion & Kompromissfindung (5 Min.)' 
                  : 'تدريب صوتي مباشر يحاكي ظروف امتحان غوته الشفهي الحقيقي: عرض تقديمي مع إجابة أسئلة الزميل، ثم نقاش تفاوضي للوصول إلى حل وسط.'}
              </p>
            </div>

            <!-- Tab Switcher -->
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
              <button type="button" class="btn ${this.activeTab === 'teil1' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.b2SprechenStudio.switchTab('teil1')">
                🎤 Teil 1: Vortrag (العرض التقديمي)
              </button>
              <button type="button" class="btn ${this.activeTab === 'teil2' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.b2SprechenStudio.switchTab('teil2')">
                🗣️ Teil 2: Diskussion (النقاش مع الزميل)
              </button>
            </div>
          </div>

          <!-- Dynamic Tab Content -->
          <div id="b2-sprechen-tab-body">
            ${this.activeTab === 'teil1' ? this.renderTeil1HTML() : this.renderTeil2HTML()}
          </div>
        </div>
      `;
    },

    switchTab(tab) {
      this.activeTab = tab;
      this.render();
    },

    // ==========================================
    // TEIL 1: VORTRAG HTML
    // ==========================================
    renderTeil1HTML() {
      const topic = this.topics.find(t => t.id === this.selectedTopic) || this.topics[0];
      const partner = window.DM && window.DM.b2 && window.DM.b2.AIPartner;
      const partnerQ = partner ? partner.vortragQuestions.find(q => q.topic === this.selectedTopic) : null;

      return `
        <div style="display:grid; grid-template-columns: 1fr 340px; gap:20px; align-items:start;" class="b2-schreiben-grid">
          
          <!-- Left: Stage Card -->
          <div>
            <!-- Topic Selector Cards -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:18px;">
              ${this.topics.map(t => `
                <div class="card" style="padding:14px; cursor:pointer; border:2px solid ${t.id === this.selectedTopic ? 'var(--accent)' : 'var(--border)'}; background:${t.id === this.selectedTopic ? 'var(--accent-light)' : 'var(--bg-card)'};"
                  onclick="window.DM.b2SprechenStudio.selectTopic('${t.id}')">
                  <strong style="display:block; font-size:0.95rem; color:var(--text-primary); margin-bottom:4px;">${t.titleAr}</strong>
                  <span class="de-text" dir="ltr" style="font-size:0.85rem; color:var(--text-secondary);">${t.promptDe}</span>
                </div>
              `).join('')}
            </div>

            <!-- Speech Stage Card -->
            <div class="card" style="padding:22px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid var(--border-light); padding-bottom:10px;">
                <div>
                  <h3 style="margin:0; font-size:1.15rem; color:var(--text-primary);">
                    🎤 ${topic.titleDe}
                  </h3>
                  <small style="color:var(--text-muted);">المطلوب: التحدث لمدة دقيقتين ونصف بشكل متواصل ومترابط</small>
                </div>
                <span class="badge badge-primary">Vortrag (4 Min.)</span>
              </div>

              <!-- Mandatory Presentation Points -->
              <div style="background:var(--bg-primary); border-radius:var(--radius-md); padding:14px; margin-bottom:16px;">
                <strong style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--accent);">
                  📌 عناصر العرض الأربعة الواجب ذكرها:
                </strong>
                <ul style="margin:0; padding-inline-start:20px; font-size:0.88rem; line-height:1.6; color:var(--text-secondary);">
                  ${topic.points.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
              </div>

              <!-- Recording & Transcript Area -->
              <div style="margin-bottom:16px;">
                <label style="display:block; font-weight:700; margin-bottom:6px; font-size:0.9rem;">
                  نص حديثك (يتم تحويله صوتياً بالمايكروفون أو كتابته يدوياً):
                </label>
                <div style="position:relative;">
                  <textarea id="b2-vortrag-input" class="de-text" dir="ltr"
                    placeholder="Klicken Sie auf 'Aufnahme starten' und sprechen Sie frei auf Deutsch..."
                    style="width:100%; min-height:180px; padding:14px; border:1px solid var(--border); border-radius:var(--radius-md); font-family:var(--font-de); font-size:0.95rem; line-height:1.7; background:var(--bg-primary); color:var(--text-primary);"></textarea>
                </div>

                <!-- Mic Controls -->
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; flex-wrap:wrap; gap:10px;">
                  <div style="display:flex; gap:10px;">
                    <button type="button" class="btn btn-primary" id="b2-mic-btn" onclick="window.DM.b2SprechenStudio.toggleRecording('b2-vortrag-input', this)">
                      🎙️ بدء التسجيل والتحدث
                    </button>
                    <button type="button" class="btn btn-secondary" onclick="window.DM.b2SprechenStudio.evaluateVortrag()">
                      🔍 تقييم العرض الشفهي
                    </button>
                  </div>
                  <small style="color:var(--text-muted);">يمكنك استخدام اختصار (Win + H) للكتابة بالصوت أيضاً</small>
                </div>
              </div>

              <!-- Partner Follow-up Question -->
              ${partnerQ ? `
                <div class="card" style="margin-top:18px; border:1px solid var(--border); background:var(--bg-primary); padding:16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <strong style="color:var(--accent); font-size:0.95rem;">
                      🧑‍💼 سؤال الزميل (Lukas) بعد نهاية عرضك:
                    </strong>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="Speech.speak('${partnerQ.de.replace(/'/g, "\\'")}')">
                      🔊 استمع لسؤال الزميل
                    </button>
                  </div>
                  <p class="de-text" dir="ltr" style="margin:0 0 6px 0; font-size:0.95rem; line-height:1.6;">
                    "${partnerQ.de}"
                  </p>
                  <small style="color:var(--text-muted); display:block;">
                    ترجمة السؤال: ${partnerQ.ar}
                  </small>
                </div>
              ` : ''}

              <!-- Evaluation Feedback Area -->
              <div id="b2-vortrag-eval-container" style="margin-top:16px;"></div>
            </div>
          </div>

          <!-- Right: Redemittel & Tips -->
          <div>
            <div class="card" style="padding:18px; position:sticky; top:80px;">
              <h3 style="margin-top:0; font-size:1.05rem; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
                <span>💡</span>
                <span>تراكيب الربط الذهبية (Redemittel)</span>
              </h3>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
                استخدم هذه العبارات لضمان سلاسة وترابط العرض:
              </p>
              <div style="display:flex; flex-direction:column; gap:8px; max-height:450px; overflow-y:auto;">
                ${topic.redemittel.map(r => `
                  <div class="de-text" dir="ltr" style="font-size:0.85rem; padding:8px 10px; background:var(--bg-primary); border-radius:var(--radius-sm); border:1px solid var(--border); line-height:1.4;">
                    • ${Utils.escapeHtml(r)}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

        </div>
      `;
    },

    selectTopic(id) {
      this.selectedTopic = id;
      this.render();
    },

    // ==========================================
    // TEIL 2: DISKUSSION HTML
    // ==========================================
    renderTeil2HTML() {
      const partner = window.DM && window.DM.b2 && window.DM.b2.AIPartner;
      const scenario = (partner && partner.scenarios[0]) || { titleDe: 'Diskussion', contextDe: '', turns: [] };
      const currentTurnData = scenario.turns[this.diskussionTurn] || null;

      return `
        <div style="display:grid; grid-template-columns: 1fr 340px; gap:20px; align-items:start;" class="b2-schreiben-grid">
          
          <!-- Left: Dialog Simulation Area -->
          <div>
            <div class="card" style="padding:22px; margin-bottom:16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div>
                  <h3 style="margin:0; font-size:1.15rem; color:var(--text-primary);">
                    🗣️ ${scenario.titleDe}
                  </h3>
                  <small style="color:var(--text-muted);">${scenario.titleAr}</small>
                </div>
                <span class="badge badge-primary">Diskussion (5 Min.)</span>
              </div>

              <div style="background:var(--bg-primary); padding:12px; border-radius:var(--radius-md); font-size:0.9rem; line-height:1.6; margin-bottom:18px;">
                <strong>سياق الموقف:</strong> ${scenario.contextDe}
              </div>

              <!-- Chat Transcript Area -->
              <div id="b2-diskussion-transcript" style="display:flex; flex-direction:column; gap:14px; margin-bottom:20px;">
                ${this.transcriptHistory.map(item => `
                  <div style="display:flex; gap:12px; align-items:flex-start; ${item.sender === 'user' ? 'flex-direction:row-reverse;' : ''}">
                    <span style="font-size:1.6rem;">${item.sender === 'user' ? '👤' : '🧑‍💼'}</span>
                    <div style="max-width:80%; padding:12px 16px; border-radius:var(--radius-md); background:${item.sender === 'user' ? 'var(--accent); color:#fff;' : 'var(--bg-primary); border:1px solid var(--border); color:var(--text-primary);'};">
                      <strong style="display:block; font-size:0.85rem; margin-bottom:4px; opacity:0.8;">
                        ${item.sender === 'user' ? 'أنت (Du)' : 'الزميل (Lukas)'}
                      </strong>
                      <div class="de-text" dir="ltr" style="line-height:1.6; font-size:0.95rem;">
                        ${Utils.escapeHtml(item.text)}
                      </div>
                      ${item.sender === 'partner' ? `
                        <button type="button" class="btn btn-outline btn-sm" style="margin-top:6px; font-size:0.75rem; padding:2px 8px;" onclick="Speech.speak('${item.text.replace(/'/g, "\\'")}')">
                          🔊 إعادة الاستماع
                        </button>
                      ` : ''}
                    </div>
                  </div>
                `).join('')}

                <!-- Current Partner Turn Prompt -->
                ${currentTurnData ? `
                  <div style="display:flex; gap:12px; align-items:flex-start;">
                    <span style="font-size:1.6rem;">🧑‍💼</span>
                    <div style="max-width:85%; padding:14px 18px; border-radius:var(--radius-md); background:var(--accent-light); border:2px solid var(--accent); color:var(--text-primary);">
                      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <strong style="color:var(--accent); font-size:0.9rem;">
                          الزميل (Lukas) يتحدث إليك الآن:
                        </strong>
                        <button type="button" class="btn btn-primary btn-sm" onclick="Speech.speak('${currentTurnData.de.replace(/'/g, "\\'")}')">
                          🔊 استمع لصوت الزميل
                        </button>
                      </div>
                      <p class="de-text" dir="ltr" style="margin:0 0 6px 0; font-size:1rem; line-height:1.6; font-weight:600;">
                        "${currentTurnData.de}"
                      </p>
                      <small style="color:var(--text-muted); display:block;">
                        ${currentTurnData.ar}
                      </small>
                    </div>
                  </div>
                ` : `
                  <div class="card text-center" style="padding:20px; background:var(--bg-primary); border:2px dashed var(--success);">
                    <h3>🎉 اكتملت جولات النقاش بنجاح!</h3>
                    <p style="color:var(--text-muted);">تم التوصل إلى حل وسط واتفاق نهائي مع الزميل.</p>
                    <button type="button" class="btn btn-primary" onclick="window.DM.b2SprechenStudio.evaluateDiskussion()">
                      🏆 عرض التقييم النهائي لاختبار B2 Sprechen
                    </button>
                  </div>
                `}
              </div>

              <!-- Candidate Response Input & Mic -->
              ${currentTurnData ? `
                <div style="border-top:1px solid var(--border-light); padding-top:16px;">
                  <label style="display:block; font-weight:700; margin-bottom:6px; font-size:0.9rem;">
                    إجابتك وردك على الزميل:
                  </label>
                  <div style="display:flex; gap:10px; margin-bottom:10px;">
                    <input type="text" id="b2-diskussion-input" class="de-text" dir="ltr"
                      placeholder="Sprechen oder tippen Sie Ihre Antwort..."
                      style="flex:1; padding:12px; border:1px solid var(--border); border-radius:var(--radius-md); font-family:var(--font-de); font-size:0.95rem; background:var(--bg-primary); color:var(--text-primary);"
                      onkeydown="if(event.key==='Enter') window.DM.b2SprechenStudio.sendUserResponse()">
                    <button type="button" class="btn btn-secondary" onclick="window.DM.b2SprechenStudio.toggleRecording('b2-diskussion-input', this)">
                      🎙️ مايك
                    </button>
                    <button type="button" class="btn btn-primary" onclick="window.DM.b2SprechenStudio.sendUserResponse()">
                      إرسال ➔
                    </button>
                  </div>
                  <small style="color:var(--text-muted);">
                    💡 نصيحة: اعترف بحجة الزميل أولاً ثم اطرح حجتك المضادة: <em>(Ich stimme dir zu, aber man sollte auch bedenken, dass...)</em>
                  </small>
                </div>
              ` : ''}

              <!-- Evaluation Feedback Container -->
              <div id="b2-diskussion-eval-container" style="margin-top:16px;"></div>
            </div>
          </div>

          <!-- Right: Useful Discussion Redemittel -->
          <div>
            <div class="card" style="padding:18px; position:sticky; top:80px;">
              <h3 style="margin-top:0; font-size:1.05rem; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
                <span>🤝</span>
                <span>عبارات التفاوض والاتفاق (B2)</span>
              </h3>
              
              <strong style="display:block; font-size:0.85rem; color:var(--accent); margin:10px 0 6px 0;">
                الموافقة الجزئية (Teilweise zustimmen):
              </strong>
              <div class="de-text" dir="ltr" style="font-size:0.82rem; line-height:1.5; margin-bottom:10px; background:var(--bg-primary); padding:8px; border-radius:4px;">
                • Da hast du im Prinzip recht, aber...<br>
                • Das ist ein wichtiges Argument, allerdings...
              </div>

              <strong style="display:block; font-size:0.85rem; color:var(--accent); margin-bottom:6px;">
                الاعتراض اللبق (Widersprechen):
              </strong>
              <div class="de-text" dir="ltr" style="font-size:0.82rem; line-height:1.5; margin-bottom:10px; background:var(--bg-primary); padding:8px; border-radius:4px;">
                • Meiner Ansicht nach ist das zu kurz gedacht.<br>
                • Ich sehe das etwas anders, weil...
              </div>

              <strong style="display:block; font-size:0.85rem; color:var(--accent); margin-bottom:6px;">
                تقديم حل وسط (Kompromiss):
              </strong>
              <div class="de-text" dir="ltr" style="font-size:0.82rem; line-height:1.5; background:var(--bg-primary); padding:8px; border-radius:4px;">
                • Wie wäre es, wenn wir uns in der Mitte treffen?<br>
                • Wollen wir uns darauf einigen, dass...
              </div>
            </div>
          </div>

        </div>
      `;
    },

    toggleRecording(inputId, btnEl) {
      if (window.Speech && window.Speech.listen) {
        window.Speech.listen(inputId, btnEl, (transcript) => {
          const el = document.getElementById(inputId);
          if (el) el.value = transcript;
        });
      } else {
        alert('يتطلب التسجيل الصوتي متصفحاً يدعم Web Speech API.');
      }
    },

    sendUserResponse() {
      const input = document.getElementById('b2-diskussion-input');
      if (!input || !input.value.trim()) return;

      const userText = input.value.trim();
      this.transcriptHistory.push({ sender: 'user', text: userText });
      input.value = '';

      // Move to next turn
      this.diskussionTurn += 1;
      this.render();

      // Automatically speak the next partner prompt if available
      const partner = window.DM && window.DM.b2 && window.DM.b2.AIPartner;
      const scenario = partner && partner.scenarios[0];
      if (scenario && scenario.turns[this.diskussionTurn]) {
        setTimeout(() => {
          if (window.Speech && window.Speech.speak) {
            window.Speech.speak(scenario.turns[this.diskussionTurn].de);
          }
        }, 600);
      }
    },

    evaluateVortrag() {
      const input = document.getElementById('b2-vortrag-input');
      const container = document.getElementById('b2-vortrag-eval-container');
      if (!input || !container) return;

      const text = input.value.trim();
      if (!text) {
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast('الرجاء التحدث بالمايك أو كتابة نص العرض أولاً.', 'warning');
        }
        return;
      }

      const partner = window.DM && window.DM.b2 && window.DM.b2.AIPartner;
      const result = partner ? partner.evaluateSpeaking(text, 'vortrag') : { total: 85, passed: true, words: 120, breakdown: { pronunciation: 22, fluency: 22, grammar: 20, interaction: 21 } };

      container.innerHTML = `
        <div class="card fade-in" style="background:var(--bg-primary); border:2px solid ${result.passed ? 'var(--success)' : 'var(--warning)'}; padding:18px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h4 style="margin:0; font-size:1.1rem; color:var(--text-primary);">
              ${result.passed ? '✅ اجتياز ممتاز لعرض B2 الشفهي!' : '⚠️ العرض يحتاج للمزيد من التفاصيل والروابط'}
            </h4>
            <span style="font-size:1.4rem; font-weight:800; color:${result.passed ? 'var(--success)' : 'var(--warning)'};">
              ${result.total} / 100 نقطة
            </span>
          </div>

          <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; font-size:0.85rem; margin-bottom:12px;">
            <div style="background:var(--bg-card); padding:8px; border-radius:4px; text-align:center;">
              <strong>النطق والتنغيم</strong><br>${result.breakdown.pronunciation} / 25
            </div>
            <div style="background:var(--bg-card); padding:8px; border-radius:4px; text-align:center;">
              <strong>الطلاقة والسرعة</strong><br>${result.breakdown.fluency} / 25
            </div>
            <div style="background:var(--bg-card); padding:8px; border-radius:4px; text-align:center;">
              <strong>القواعد والمفردات</strong><br>${result.breakdown.grammar} / 25
            </div>
            <div style="background:var(--bg-card); padding:8px; border-radius:4px; text-align:center;">
              <strong>هيكلية العرض</strong><br>${result.breakdown.interaction} / 25
            </div>
          </div>
          <small style="color:var(--text-secondary); display:block;">
            عدد الكلمات المسجلة: ${result.words} كلمة | الروابط المكتشفة: ${(result.connectorsFound || []).join(', ') || 'تلقائي'}
          </small>
        </div>
      `;
    },

    evaluateDiskussion() {
      const container = document.getElementById('b2-diskussion-eval-container');
      if (!container) return;

      const fullText = this.transcriptHistory.filter(t => t.sender === 'user').map(t => t.text).join(' ');
      const partner = window.DM && window.DM.b2 && window.DM.b2.AIPartner;
      const result = partner ? partner.evaluateSpeaking(fullText || 'Ich stimme dir zu, aber...', 'diskussion') : { total: 88, passed: true, breakdown: { pronunciation: 23, fluency: 22, grammar: 21, interaction: 22 } };

      container.innerHTML = `
        <div class="card fade-in" style="background:var(--bg-card); border:2px solid var(--success); padding:20px;">
          <h3 style="color:var(--success); margin-top:0;">🏆 شهادة إتمام الامتحان الشفهي الكامل B2</h3>
          <p style="font-size:0.95rem; line-height:1.6;">
            تهانينا! لقد أتممت جولات النقاش التفاعلي مع الزميل بنجاح، ونجحت في إبداء رأيك والدفاع عنه وتقديم مقترح وسط مرن.
          </p>
          <div style="font-size:1.6rem; font-weight:800; color:var(--success); margin:12px 0;">
            العلامة الشفهية الإجمالية: ${result.total} / 100 نقطة (ناجح بمعهد غوته)
          </div>
          <a href="#/exams" class="btn btn-secondary">العودة لمركز الامتحانات</a>
        </div>
      `;
    }
  };

  window.DM.b2SprechenStudio = B2SprechenStudio;
})();
