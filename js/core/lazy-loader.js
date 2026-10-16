// website/js/core/lazy-loader.js — Dynamic Resource Loader
// Loads scripts, styles, and JSON asynchronously on-demand for B2 mode & social features.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const _loadedScripts = new Map();
  const _loadedStyles = new Map();
  const _jsonCache = new Map();

  const lazy = {
    // Dynamic Script Loader (Promise-based, deduplicated)
    loadScript(src) {
      if (!src) return Promise.reject(new Error('Script src required'));

      // If already loaded or loading, return existing promise
      if (_loadedScripts.has(src)) {
        return _loadedScripts.get(src);
      }

      const promise = new Promise((resolve, reject) => {
        // Check if script element with this src already exists in DOM
        const existing = document.querySelector(`script[src="${src}"], script[src^="${src}?"]`);
        if (existing) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => {
          resolve();
        };

        script.onerror = (err) => {
          _loadedScripts.delete(src); // allow retry on failure
          reject(new Error(`Failed to load script: ${src}`));
        };

        document.head.appendChild(script);
      });

      _loadedScripts.set(src, promise);
      return promise;
    },

    // Dynamic Stylesheet Loader (Promise-based, deduplicated)
    loadStyle(href) {
      if (!href) return Promise.reject(new Error('Style href required'));

      if (_loadedStyles.has(href)) {
        return _loadedStyles.get(href);
      }

      const promise = new Promise((resolve, reject) => {
        const existing = document.querySelector(`link[href="${href}"], link[href^="${href}?"]`);
        if (existing) {
          resolve();
          return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;

        link.onload = () => resolve();
        link.onerror = () => {
          _loadedStyles.delete(href);
          reject(new Error(`Failed to load stylesheet: ${href}`));
        };

        document.head.appendChild(link);
      });

      _loadedStyles.set(href, promise);
      return promise;
    },

    // JSON Fetcher (Promise-based, cached)
    async loadJson(url, useCache = true) {
      if (!url) throw new Error('JSON url required');

      if (useCache && _jsonCache.has(url)) {
        return DM.util.deepClone(_jsonCache.get(url));
      }

      try {
        const response = await fetch(url, { cache: 'no-cache' });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} loading ${url}`);
        }
        const data = await response.json();
        if (useCache) {
          _jsonCache.set(url, data);
        }
        return DM.util.deepClone(data);
      } catch (err) {
        console.error(`[DM.lazy] Failed to load JSON from ${url}:`, err);
        throw err;
      }
    },

    // Prefetch a list of resources in background
    prefetch(resources = []) {
      for (const res of resources) {
        if (res.endsWith('.js')) {
          this.loadScript(res).catch(() => {});
        } else if (res.endsWith('.css')) {
          this.loadStyle(res).catch(() => {});
        } else if (res.endsWith('.json')) {
          this.loadJson(res).catch(() => {});
        }
      }
    },

    // Convenience aliases
    css(href) {
      return this.loadStyle(href);
    },
    js(src) {
      return this.loadScript(src);
    }
  };

  window.DM.lazy = lazy;
})();
