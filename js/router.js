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
    const rawPath = hash || this.getCurrentPath();
    const [pathWithoutQuery, queryString] = rawPath.split('?');
    const queryParams = {};
    if (queryString) {
      try {
        const sp = new URLSearchParams(queryString);
        for (const [k, v] of sp.entries()) {
          queryParams[k] = v;
        }
      } catch (e) {}
    }
    const parts = pathWithoutQuery.split('/');
    
    // Match patterns
    if (parts[1] === 'lesson' && parts[2]) {
      return { path: '/lesson', params: { id: parts[2], ...queryParams } };
    }
    if (parts[1] === 'game' && parts[2]) {
      return { path: '/game', params: { id: parts[2], ...queryParams } };
    }
    if (parts[1] === 'exam' && parts[2]) {
      return { path: '/exam', params: { id: parts[2], mode: parts[3] || 'exam', ...queryParams } };
    }
    if (parts[1] === 'b2-exam' && parts[2]) {
      return { path: '/exam', params: { id: parts[2], mode: parts[3] || 'exam', ...queryParams } };
    }
    if (parts[1] === 'b2-drill' && parts[2]) {
      return { path: '/b2-drill', params: { type: parts[2], ...queryParams } };
    }
    if (parts[1] === 'lesetext' && parts[2]) {
      return { path: '/lesetext', params: { id: parts[2], ...queryParams } };
    }
    if (parts[1] === 'lesetexte') {
      if (parts[2]) return { path: '/lesetext', params: { id: parts[2], ...queryParams } };
      return { path: '/lesetexte', params: { ...queryParams } };
    }
    if (parts[1] === 'exams') {
      if (parts[2] === 'official') return { path: '/exams/official', params: { ...queryParams } };
      if (parts[2] === 'history') return { path: '/exams/history', params: { ...queryParams } };
      return { path: '/exams', params: { ...queryParams } };
    }
    return { path: '/' + (parts[1] || 'home'), params: { ...queryParams } };
  },
  
  // Handle route change
  handleRoute() {
    const { path, params } = this.parseRoute();
    this.currentRoute = path;
    
    // Emit routechange event on DM Event Bus
    if (window.DM && window.DM.bus) {
      window.DM.bus.emit('dm:routechange', { path, params });
    }
    
    // Update active nav (both desktop sidebar and mobile bottom nav)
    document.querySelectorAll('.nav-item, .bottom-nav-item, .nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkRoute = href.replace('#', '') || link.getAttribute('data-route') || '';
      const isActive = linkRoute === path ||
        (path === '/lesson' && linkRoute === '/lessons') ||
        (path === '/game' && linkRoute === '/games') ||
        (path === '/funktionsverben' && linkRoute === '/funktionsverben') ||
        (path === '/friends' && linkRoute === '/friends') ||
        ((path === '/lesetexte' || path === '/lesetext') && (linkRoute === '/lesetexte' || linkRoute === '/lesetext')) ||
        ((path.startsWith('/exam')) && linkRoute === '/exams');
      link.classList.toggle('active', isActive);
    });
    
    // Stop any ongoing audio playback across route transitions
    if (window.LesetexteReader && LesetexteReader.stopFullAudioPlay) LesetexteReader.stopFullAudioPlay();
    if (window.DiktatTrainer && DiktatTrainer.stopAudio) DiktatTrainer.stopAudio();
    if (window.StoriesTrainer && StoriesTrainer.stopFullStory) StoriesTrainer.stopFullStory();
    if (window.Speech && Speech.stop) Speech.stop();

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

