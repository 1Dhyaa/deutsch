// js/verbs-renderer.js — Verbs Table View (mirroring the user's notebook)

const VerbsRenderer = {
  currentFilterLevel: 'all',
  currentFilterAux: 'all',
  searchQuery: '',

  render(container) {
    if (window.App && window.App.setBreadcrumb) {
      window.App.setBreadcrumb('تصريف الأفعال / جدول الأفعال الشامل (Infinitiv - Präteritum - Perfekt)');
    }

    const verbs = window.VERBS_DATABASE || [];

    container.innerHTML = `
      <div class="content-container fade-in">
        <div class="section-header">
          <div>
            <h1 class="section-title">جدول تصريف الأفعال الشامل (Verbtabelle A1 – B1)</h1>
            <p class="section-subtitle">
              جميع الأفعال الشاذة والأساسية وفق نموذج الدفتر: المصدر، الماضي البسيط (Präteritum)، الفعل المساعد (hat / ist)، الماضي التام (Perfekt)، والترجمة العربية.
            </p>
          </div>
          <span class="badge badge-primary" id="verbs-count-badge">${verbs.length} فعلاً مسجلاً</span>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="card" style="padding: 20px 24px; margin-bottom: 24px;">
          <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center; justify-content: space-between;">
            <!-- Live Search -->
            <div style="flex: 1; min-width: 260px; position: relative;">
              <input 
                type="text" 
                id="verb-search-input" 
                class="form-input" 
                placeholder="🔍 ابحث عن أي فعل بالألمانية أو العربية (مثل: gehen, sah, يرى, ist...)"
                oninput="VerbsRenderer.handleSearch(this.value)"
                style="padding-inline-start: 16px;"
              />
            </div>

            <!-- Level Filter Pills -->
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn btn-sm btn-primary verb-filter-btn" data-level="all" onclick="VerbsRenderer.filterLevel('all', this)">الكل</button>
              <button class="btn btn-sm btn-secondary verb-filter-btn" data-level="A1" onclick="VerbsRenderer.filterLevel('A1', this)">A1</button>
              <button class="btn btn-sm btn-secondary verb-filter-btn" data-level="A2" onclick="VerbsRenderer.filterLevel('A2', this)">A2</button>
              <button class="btn btn-sm btn-secondary verb-filter-btn" data-level="B1" onclick="VerbsRenderer.filterLevel('B1', this)">B1</button>
            </div>

            <!-- Aux Filter Pills (hat vs ist) -->
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-sm btn-secondary verb-aux-btn" data-aux="all" onclick="VerbsRenderer.filterAux('all', this)">الكل</button>
              <button class="btn btn-sm btn-secondary verb-aux-btn" data-aux="ist" onclick="VerbsRenderer.filterAux('ist', this)" style="color: var(--success); font-weight: 700;">فقط ist (حركة/تحول)</button>
              <button class="btn btn-sm btn-secondary verb-aux-btn" data-aux="hat" onclick="VerbsRenderer.filterAux('hat', this)" style="color: var(--accent); font-weight: 700;">فقط hat</button>
            </div>
          </div>
        </div>

        <!-- Verbs Table Card -->
        <div class="card" style="padding: 0; overflow: hidden;">
          <div class="table-wrapper" style="margin: 0; border: none; border-radius: 0;">
            <table class="lesson-table" id="verbs-master-table">
              <thead>
                <tr style="background: var(--bg-primary);">
                  <th style="width: 22%;">المصدر (Infinitiv)</th>
                  <th style="width: 20%;">الماضي (Präteritum)</th>
                  <th style="width: 16%; text-align: center;">المساعد (Perfekt)</th>
                  <th style="width: 22%;">اسم المفعول (Partizip II)</th>
                  <th style="width: 20%;">المعنى بالعربية</th>
                </tr>
              </thead>
              <tbody id="verbs-table-body">
                <!-- Dynamically populated -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    this.renderRows();
  },

  handleSearch(query) {
    this.searchQuery = query.trim().toLowerCase();
    this.renderRows();
  },

  filterLevel(level, btn) {
    this.currentFilterLevel = level;
    document.querySelectorAll('.verb-filter-btn').forEach(b => {
      b.classList.remove('btn-primary');
      b.classList.add('btn-secondary');
    });
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
    this.renderRows();
  },

  filterAux(aux, btn) {
    this.currentFilterAux = aux;
    document.querySelectorAll('.verb-aux-btn').forEach(b => {
      b.classList.remove('btn-primary');
      b.classList.add('btn-secondary');
    });
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
    this.renderRows();
  },

  getFilteredVerbs() {
    let list = window.VERBS_DATABASE || [];

    // Filter by level
    if (this.currentFilterLevel !== 'all') {
      list = list.filter(v => v.level === this.currentFilterLevel);
    }

    // Filter by aux
    if (this.currentFilterAux !== 'all') {
      list = list.filter(v => v.hilfsverb === this.currentFilterAux);
    }

    // Filter by search
    if (this.searchQuery) {
      const q = this.searchQuery;
      list = list.filter(v => 
        v.infinitive.toLowerCase().includes(q) ||
        v.praeteritum.toLowerCase().includes(q) ||
        v.partizip2.toLowerCase().includes(q) ||
        v.hilfsverb.toLowerCase().includes(q) ||
        (v.ar && v.ar.includes(q))
      );
    }

    return list;
  },

  renderRows() {
    const list = this.getFilteredVerbs();
    const tbody = document.getElementById('verbs-table-body');
    const badge = document.getElementById('verbs-count-badge');
    if (badge) badge.textContent = `${list.length} فعلاً`;

    if (!tbody) return;

    if (list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; padding: 40px; color: var(--text-muted);">
            لم يتم العثور على أفعال تطابق بحثك. جرب كتابة كلمة أخرى.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = list.map(v => {
      const isIst = v.hilfsverb === 'ist';
      const auxBadgeClass = isIst ? 'badge-success' : 'badge-primary';
      const cleanInf = v.infinitive.replace(/\s*\(sich\)/g, '');

      return `
        <tr>
          <td>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="de-text" style="font-weight: 700; font-size: 1.05rem;" dir="ltr">${Utils.escapeHtml(v.infinitive)}</span>
              <button class="audio-btn" onclick="Speech.speak('${cleanInf.replace(/'/g, "\\'")}')" title="استمع للمصدر" style="width: 32px; height: 32px;">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.08"/></svg>
              </button>
            </div>
          </td>
          <td>
            <span class="de-text" style="color: var(--accent); font-weight: 600;" dir="ltr">${Utils.escapeHtml(v.praeteritum)}</span>
          </td>
          <td style="text-align: center;">
            <span class="badge ${auxBadgeClass}" style="font-family: var(--font-de); font-size: 0.85rem; padding: 3px 10px;">
              ${Utils.escapeHtml(v.hilfsverb)}
            </span>
          </td>
          <td>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="de-text" style="font-weight: 700; color: var(--text-primary);" dir="ltr">${Utils.escapeHtml(v.partizip2)}</span>
              <button class="audio-btn" onclick="Speech.speak('${v.partizip2.split('/')[0].trim().replace(/'/g, "\\'")}')" title="استمع لـ Partizip II" style="width: 32px; height: 32px;">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.08"/></svg>
              </button>
            </div>
          </td>
          <td>
            <span style="font-weight: 600; color: var(--text-secondary);">${Utils.escapeHtml(v.ar || '')}</span>
            <span class="badge" style="background: var(--bg-primary); border: 1px solid var(--border); font-size: 0.75rem; margin-inline-start: 6px;">${v.level}</span>
          </td>
        </tr>
      `;
    }).join('');
  }
};
