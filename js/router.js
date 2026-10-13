const Router = {
  routes: {},
  currentRoute: null,
  
  // Register a route
  register(path, handler) {
    this.routes[path] = handler;
  },
  
  // Navigate to a route
  navigate(path) {
    window.location.hash = path;
  },
  
  // Get current hash route
  getCurrentPath() {
    return window.location.hash.slice(1) || '/home';
  },
  
  // Parse route: /lesson/a1-review-01 → { path: '/lesson', params: { id: 'a1-review-01' } }
  parseRoute(hash) {
    const path = hash || this.getCurrentPath();
    const parts = path.split('/');
    
    // Match patterns
    if (parts[1] === 'lesson' && parts[2]) {
      return { path: '/lesson', params: { id: parts[2] } };
    }
    if (parts[1] === 'game' && parts[2]) {
      return { path: '/game', params: { id: parts[2] } };
    }
    if (parts[1] === 'exam' && parts[2]) {
      return { path: '/exam', params: { id: parts[2], mode: parts[3] || 'exam' } };
    }
    if (parts[1] === 'exams') {
      if (parts[2] === 'official') return { path: '/exams/official', params: {} };
      if (parts[2] === 'history') return { path: '/exams/history', params: {} };
      return { path: '/exams', params: {} };
    }
    return { path: '/' + (parts[1] || 'home'), params: {} };
  },
  
  // Handle route change
  handleRoute() {
    const { path, params } = this.parseRoute();
    this.currentRoute = path;
    
    // Update active nav (both desktop sidebar and mobile bottom nav)
    document.querySelectorAll('.nav-item, .bottom-nav-item, .nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkRoute = href.replace('#', '') || link.getAttribute('data-route') || '';
      const isActive = linkRoute === path ||
        (path === '/lesson' && linkRoute === '/lessons') ||
        (path === '/game' && linkRoute === '/games') ||
        ((path.startsWith('/exam')) && linkRoute === '/exams');
      link.classList.toggle('active', isActive);
    });
    
    // Find and execute handler immediately for zero-flicker navigation
    const handler = this.routes[path];
    if (handler) {
      const content = document.getElementById('app-content');
      if (content) {
        try {
          handler(params);
        } catch (e) {
          console.error('Route error:', e);
          content.innerHTML = `<div class="card" style="text-align:center; padding:40px;"><h2>حدث خطأ</h2><p>${Utils.escapeHtml(e.message)}</p></div>`;
        }
      }
    } else {
      // 404 - redirect to home
      this.navigate('/home');
    }
  },
  
  // Initialize router
  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    // Handle initial route
    if (!window.location.hash || window.location.hash === '#/') {
      window.location.hash = '#/home';
    } else {
      this.handleRoute();
    }
  }
};

window.Router = Router;

