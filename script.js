(function () {
  'use strict';

  function initThemeToggle() {
    var button = document.querySelector('.theme-toggle');
    var storageKey = 'steven-site-theme';
    if (!button) {
      return;
    }

    function applyTheme(theme) {
      var isNight = theme === 'night';
      document.body.setAttribute('data-theme', isNight ? 'night' : 'day');
      button.classList.toggle('is-night', isNight);
      button.setAttribute('aria-pressed', String(isNight));
      button.textContent = isNight ? 'Day Mode' : 'Night Mode';
    }

    var savedTheme = null;
    try {
      savedTheme = window.localStorage.getItem(storageKey);
    } catch (error) {
      savedTheme = null;
    }

    applyTheme(savedTheme === 'night' ? 'night' : 'day');

    button.addEventListener('click', function () {
      var nextTheme = document.body.getAttribute('data-theme') === 'night' ? 'day' : 'night';
      applyTheme(nextTheme);
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch (error) {
        // Ignore storage failures and keep the theme in-memory.
      }
    });
  }

  function initCopyEmail() {
    var button = document.querySelector('[data-copy-email]');
    if (!button || !navigator.clipboard) {
      return;
    }

    var originalText = button.textContent;
    button.addEventListener('click', function () {
      navigator.clipboard.writeText(button.getAttribute('data-copy-email')).then(function () {
        button.textContent = 'Email Copied';
        button.classList.add('is-copied');
        window.setTimeout(function () {
          button.textContent = originalText;
          button.classList.remove('is-copied');
        }, 1800);
      });
    });
  }

  function initRoleToggles() {
    var toggles = document.querySelectorAll('.role-toggle');
    toggles.forEach(function (button) {
      button.addEventListener('click', function () {
        var role = button.closest('.role-collapsible');
        if (!role) {
          return;
        }

        var isExpanded = role.classList.toggle('is-expanded');
        button.setAttribute('aria-expanded', String(isExpanded));
        button.textContent = isExpanded ? 'Close Case Study' : 'Open Case Study';
      });
    });
  }

  function initScrollEffects() {
    var progress = document.querySelector('.scroll-progress');
    var backToTop = document.querySelector('.back-to-top');

    function onScroll() {
      var scrollTop = window.scrollY || window.pageYOffset;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = docHeight > 0 ? scrollTop / docHeight : 0;

      if (progress) {
        progress.style.transform = 'scaleX(' + ratio + ')';
      }

      if (backToTop) {
        backToTop.classList.toggle('is-visible', scrollTop > 500);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function initActiveNav() {
    var links = document.querySelectorAll('.quick-link');
    var sections = document.querySelectorAll('main section[id]');

    if (!links.length || !sections.length) {
      return;
    }

    var linkMap = {};
    links.forEach(function (link) {
      linkMap[link.getAttribute('href')] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          links.forEach(function (link) {
            link.classList.remove('is-active');
          });

          var activeLink = linkMap['#' + entry.target.id];
          if (activeLink) {
            activeLink.classList.add('is-active');
          }
        });
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initReveal() {
    var sections = document.querySelectorAll('section, .hero');
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0 }
    );
    sections.forEach(function (el) {
      observer.observe(el);
    });
  }

  function init() {
    initThemeToggle();
    initCopyEmail();
    initRoleToggles();
    initScrollEffects();

    if ('IntersectionObserver' in window) {
      initReveal();
      initActiveNav();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
