// Utility functions for the German study website

const Utils = {
  // Generate a unique ID
  generateId() { return Date.now().toString(36) + Math.random().toString(36).substr(2); },
  
  // Escape HTML to prevent XSS
  escapeHtml(str) { 
    if (!str) return '';
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
  },
  
  // Format date to Arabic locale
  formatDate(date) { return new Date(date).toLocaleDateString('ar-EG'); },
  
  // Get today's date string (YYYY-MM-DD)
  today() { return new Date().toISOString().split('T')[0]; },
  
  // Shuffle array (Fisher-Yates)
  shuffle(arr) { 
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
  
  // Normalize German text for comparison (lowercase, trim, handle ß/ss, umlauts)
  normalizeGerman(text) { return text.trim().toLowerCase().replace(/\s+/g, ' '); },
  
  // Compare user answer with correct answer (flexible: ignore punctuation, case)
  compareAnswers(userAnswer, correctAnswer, acceptList) {
    const normalize = (s) => s.trim().toLowerCase().replace(/[.!?,;:]/g, '').replace(/\s+/g, ' ');
    const normalizedUser = normalize(userAnswer);
    if (normalize(correctAnswer) === normalizedUser) return true;
    if (acceptList && acceptList.some(a => normalize(a) === normalizedUser)) return true;
    return false;
  },
  
  // Render German text with article color coding
  // Wraps der/die/das in colored spans
  colorArticles(html) {
    return html
      .replace(/\b(der|Der|DER)\b/g, '<span class="article-der">$1</span>')
      .replace(/\b(die|Die|DIE)\b/g, '<span class="article-die">$1</span>')
      .replace(/\b(das|Das|DAS)\b/g, '<span class="article-das">$1</span>');
  },
  
  // Render bold markdown (**text**) to <strong>
  renderBold(text) {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong class="highlight">$1</strong>');
  },
  
  // Render a German text block with proper dir and article colors
  renderGerman(text, options = {}) {
    let html = Utils.escapeHtml(text);
    html = Utils.renderBold(html);
    html = Utils.colorArticles(html);
    const audioBtn = options.audio ? `<button class="audio-btn" onclick="Speech.speak('${text.replace(/'/g, "\\'").replace(/\*\*/g, '')}')" title="استمع"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.08"/></svg></button>` : '';
    return `<span class="de-text" dir="ltr">${html}</span>${audioBtn}`;
  },
  
  // Create an element from HTML string
  createElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
  },
  
  // Show toast notification
  showToast(message, type = 'info', duration = 2500) {
    const container = document.getElementById('toast-container');
    if (!container) return; // In case toast container is not in DOM
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} fade-in`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },
  
  // Encouraging messages in Arabic for correct/wrong answers
  encourageCorrect() {
    const msgs = ['أحسنت! 🎯', 'ممتاز! 💪', 'صحيح! ✨', 'رائع! 🌟', 'بارك الله فيك! 👏', 'إجابة صحيحة! ✅'];
    return msgs[Math.floor(Math.random() * msgs.length)];
  },
  encourageWrong() {
    const msgs = ['حاول مرة أخرى 💪', 'لا بأس، تعلمنا شيئاً جديداً 📚', 'الخطأ جزء من التعلم 🔄', 'قريب! راجع القاعدة 📖'];
    return msgs[Math.floor(Math.random() * msgs.length)];
  },
  
  // Debounce
  debounce(fn, delay) {
    let timer;
    return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
  },
  
  // Get article color class
  getArticleClass(article) {
    if (!article) return '';
    const a = article.toLowerCase().trim();
    if (a === 'der') return 'article-der';
    if (a === 'die') return 'article-die';
    if (a === 'das') return 'article-das';
    return '';
  },
  
  // Calculate XP for quiz score
  calculateXP(score, total) {
    const base = Math.round((score / total) * 50);
    const bonus = score === total ? 20 : 0; // perfect score bonus
    return base + bonus;
  }
};

window.Utils = Utils;

