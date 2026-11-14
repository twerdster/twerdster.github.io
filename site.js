(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');

  function updateThemeButton() {
    const isDark = root.dataset.theme === 'dark';
    const label = isDark ? 'Use light theme' : 'Use dark theme';
    themeToggle.setAttribute('aria-label', label);
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.title = label;
  }

  updateThemeButton();
  themeToggle.hidden = false;
  themeToggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('aaron-wetzler-theme', root.dataset.theme);
    } catch (error) {}
    updateThemeButton();
  });

  const filters = document.querySelector('.publication-filters');
  const filterButtons = [...document.querySelectorAll('.publication-filters button')];
  const publications = [...document.querySelectorAll('.publication-list > li')];
  const publicationStatus = document.getElementById('publication-status');
  if (filters) {
    filterButtons[0].querySelector('span').textContent = `(${publications.length})`;
    filters.hidden = false;
  }

  filterButtons.forEach((button) => {
    button.setAttribute('aria-controls', 'publication-list');
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      publications.forEach((item) => {
        item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
      });
      const count = publications.filter((item) => !item.hidden).length;
      publicationStatus.textContent = `${count} publication${count === 1 ? '' : 's'} shown.`;
    });
  });

  async function copyCitation(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (error) {}
    }

    // Tailscale's HTTP preview needs the legacy clipboard fallback.
    const field = document.createElement('textarea');
    field.value = text;
    field.style.position = 'fixed';
    field.style.opacity = '0';
    const previousFocus = document.activeElement;
    document.body.append(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    previousFocus?.focus({ preventScroll: true });
    if (!copied) throw new Error('Copy unavailable');
  }

  document.querySelectorAll('.publication .item-links a[href$=".bib"], .project .item-links a[href$=".bib"]').forEach((link, index) => {
    const url = link.getAttribute('href');
    const drawer = document.createElement('div');
    drawer.id = `citation-${index + 1}`;
    drawer.className = 'citation-drawer';
    drawer.hidden = true;

    const toolbar = document.createElement('div');
    toolbar.className = 'citation-toolbar';
    const download = document.createElement('a');
    download.href = url;
    download.download = '';
    download.textContent = 'Download .bib';
    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.className = 'icon-button';
    copyButton.setAttribute('aria-label', 'Copy citation');
    copyButton.title = 'Copy citation';
    copyButton.disabled = true;
    const copyIcon = document.createElement('span');
    copyIcon.className = 'icon icon-copy';
    copyIcon.setAttribute('aria-hidden', 'true');
    copyButton.append(copyIcon);
    toolbar.append(download, copyButton);

    const pre = document.createElement('pre');
    const message = document.createElement('p');
    message.className = 'citation-message';
    message.setAttribute('role', 'status');
    drawer.append(toolbar, pre, message);

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'citation-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', drawer.id);
    toggle.append('BibTeX');
    const chevron = document.createElement('span');
    chevron.className = 'icon icon-chevron';
    chevron.setAttribute('aria-hidden', 'true');
    toggle.append(chevron);
    link.replaceWith(toggle);
    toggle.closest('.item-links').parentElement.append(drawer);

    let loading = false;
    toggle.addEventListener('click', async () => {
      drawer.hidden = !drawer.hidden;
      toggle.setAttribute('aria-expanded', String(!drawer.hidden));
      if (drawer.hidden || pre.textContent || loading) return;
      loading = true;
      message.textContent = 'Loading citation...';
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Citation unavailable');
        pre.textContent = (await response.text()).trim();
        message.textContent = '';
        copyButton.disabled = false;
      } catch (error) {
        message.textContent = 'The preview could not be loaded. Use the download link to open the citation.';
      } finally {
        loading = false;
      }
    });

    copyButton.addEventListener('click', async () => {
      try {
        await copyCitation(pre.textContent);
        copyIcon.className = 'icon icon-check';
        message.textContent = 'Citation copied.';
        setTimeout(() => {
          copyIcon.className = 'icon icon-copy';
          message.textContent = '';
        }, 2000);
      } catch (error) {
        message.textContent = 'Select the citation text to copy it, or download the .bib file.';
      }
    });
  });

  document.querySelectorAll('.publication-image img').forEach((image) => {
    image.loading = 'lazy';
    image.decoding = 'async';
  });

  const nav = document.querySelector('.site-nav');
  const navLinks = [...document.querySelectorAll('.site-nav nav a, .page-links a')].filter((link) => {
    return link.origin === location.origin && link.pathname === location.pathname && link.hash;
  });
  const sections = [...document.querySelectorAll('[data-nav-section]')];
  let scheduled = false;

  function updateNavigation() {
    if (!sections.length) return;
    const threshold = nav.getBoundingClientRect().height + 48;
    let current = sections[0].id;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= threshold) current = section.id;
    });
    if (window.scrollY + window.innerHeight >= root.scrollHeight - 2) {
      current = sections[sections.length - 1].id;
    }
    navLinks.forEach((link) => {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }

  const disclosures = [...document.querySelectorAll('.section-disclosure')];

  function revealFragment(hash) {
    let id;
    try { id = decodeURIComponent(hash.slice(1)); }
    catch (error) { return null; }
    const target = document.getElementById(id);
    if (!target) return null;
    const section = target.closest('[data-nav-section]');
    const disclosure = section?.querySelector(':scope > .section-disclosure');
    let opened = false;
    for (let ancestor = target; ancestor; ancestor = ancestor.parentElement) {
      if (ancestor.tagName === 'DETAILS' && !ancestor.open) {
        ancestor.open = true;
        opened = true;
      }
    }
    if (disclosure && !disclosure.open) {
      disclosure.open = true;
      opened = true;
    }
    return { target, opened };
  }

  function revealCurrentFragment() {
    const result = revealFragment(location.hash);
    if (result?.opened) requestAnimationFrame(() => result.target.scrollIntoView({ block: 'start' }));
    updateNavigation();
  }

  // Reveal before the browser follows an anchor, including repeated same-hash
  // clicks that do not dispatch hashchange. Modified clicks retain normal behavior.
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest?.('a[href]');
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    if (link.origin === location.origin && link.pathname === location.pathname && link.search === location.search && link.hash) {
      revealFragment(link.hash);
    }
  });
  disclosures.forEach((disclosure) => disclosure.addEventListener('toggle', () => requestAnimationFrame(updateNavigation)));
  window.addEventListener('hashchange', revealCurrentFragment);

  let closedBeforePrint = null;
  window.addEventListener('beforeprint', () => {
    if (closedBeforePrint !== null) return;
    closedBeforePrint = disclosures.filter((disclosure) => !disclosure.open);
    closedBeforePrint.forEach((disclosure) => { disclosure.open = true; });
  });
  window.addEventListener('afterprint', () => {
    closedBeforePrint?.forEach((disclosure) => { disclosure.open = false; });
    closedBeforePrint = null;
  });

  new ResizeObserver(() => {
    root.style.setProperty('--nav-height', `${nav.getBoundingClientRect().height}px`);
    updateNavigation();
  }).observe(nav);

  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateNavigation);
  }, { passive: true });
  revealCurrentFragment();
})();
