// website/js/core/namespace.js — Core Namespace, Event Bus & Utilities
// Deutsch Meister B2 & Friends Study Ecosystem

(function () {
  'use strict';

  window.DM = window.DM || {};

  // =========================================================================
  // 1. EVENT BUS (dm:*)
  // =========================================================================
  const _target = new EventTarget();

  const bus = {
    on(event, handler) {
      if (!event || typeof handler !== 'function') return () => {};
      const listener = (e) => handler(e.detail);
      _target.addEventListener(event, listener);
      // Return unsubscribe function
      return () => _target.removeEventListener(event, listener);
    },

    once(event, handler) {
      if (!event || typeof handler !== 'function') return;
      const listener = (e) => {
        _target.removeEventListener(event, listener);
        handler(e.detail);
      };
      _target.addEventListener(event, listener);
    },

    off(event, handler) {
      // Direct removal if wrapped handler is maintained, or can pass wrapper
      if (handler) {
        _target.removeEventListener(event, handler);
      }
    },

    emit(event, detail = {}) {
      if (!event) return;
      const customEvent = new CustomEvent(event, { detail });
      _target.dispatchEvent(customEvent);
    }
  };

  // =========================================================================
  // 2. CORE UTILITIES
  // =========================================================================
  const util = {
    // Generate UUID v4
    uuid() {
      if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },

    // ISO Day string in local timezone (YYYY-MM-DD)
    isoDay(date = new Date()) {
      const d = date instanceof Date ? date : new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

    // Get Monday of current/given week (YYYY-MM-DD)
    isoWeekStart(date = new Date()) {
      const d = date instanceof Date ? new Date(date) : new Date(date);
      const dayOfWeek = d.getDay(); // 0 is Sunday, 1 is Monday
      // Calculate days back to Monday
      const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
      d.setDate(d.getDate() + diffToMonday);
      return this.isoDay(d);
    },

    // Seeded pseudo-random number generator (Mulberry32)
    mulberry32(seed = 1) {
      let a = (seed | 0) || 1;
      return function () {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    },

    // Debounce function
    debounce(fn, delay = 250) {
      let timer = null;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    },

    // Clamp number between min and max
    clamp(val, min, max) {
      return Math.min(Math.max(val, min), max);
    },

    // Human-readable duration (German & Arabic aware)
    formatDuration(seconds = 0, lang = 'de') {
      const sec = Math.max(0, Math.round(seconds));
      const hours = Math.floor(sec / 3600);
      const mins = Math.floor((sec % 3600) / 60);

      const isDe = lang === 'de' || (window.I18n && window.I18n.isGerman && window.I18n.isGerman());

      if (hours > 0) {
        if (mins === 0) {
          return isDe ? `${hours} Std.` : `${hours} ساعة`;
        }
        return isDe ? `${hours} Std. ${mins} Min.` : `${hours} س و ${mins} د`;
      }
      return isDe ? `${mins} Min.` : `${mins} دقيقة`;
    },

    // Escape HTML to prevent XSS
    escapeHtml(str) {
      if (typeof str !== 'string') return String(str || '');
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    // Deep clone object safely
    deepClone(obj) {
      if (obj === null || typeof obj !== 'object') return obj;
      try {
        if (typeof structuredClone === 'function') {
          return structuredClone(obj);
        }
        return JSON.parse(JSON.stringify(obj));
      } catch (e) {
        return Object.assign({}, obj);
      }
    }
  };

  // Attach to DM namespace
  window.DM.bus = bus;
  window.DM.util = util;
})();
