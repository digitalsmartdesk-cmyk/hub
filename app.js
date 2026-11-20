(function () {
  function tint(c) { return `color-mix(in oklch, ${c} 10%, white)`; }
  function borderTint(c) { return `color-mix(in oklch, ${c} 30%, white)`; }

  const ICON_EXT_SM = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:2px;opacity:0.4" stroke="#8c8a84"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
  const ICON_EXT_MD = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:2px;opacity:0.4" stroke="#8c8a84"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
  const ICON_MAIL = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b5b3ac" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
  const ICON_COPY = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke="#6b6962"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
  const ICON_CHECK = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

  let activeTab = DEFAULT_TAB;
  let copiedKey = null;
  let copyTimer = null;

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function doCopy(key, value) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    clearTimeout(copyTimer);
    copiedKey = key;
    renderContent();
    copyTimer = setTimeout(() => { copiedKey = null; renderContent(); }, 1400);
  }

  function sectionHeader(dotColor, label, count) {
    return el("div", "section-header", `
      <span class="section-dot" style="background:${dotColor}"></span>
      <span class="section-label" style="color:${dotColor}">${label}</span>
      <span class="section-count">${count}</span>
    `);
  }

  function miniLabel(text) { return el("p", "mini-label", text); }

  function linkCard(link, color, sm) {
    const a = document.createElement("a");
    a.className = sm ? "website-card" : "link-card";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.background = tint(color);
    a.style.border = `1px solid ${borderTint(color)}`;
    a.innerHTML = `
      <span class="link-card-bar" style="background:${color}"></span>
      <span class="link-card-row">
        <span class="link-card-text">
          <span class="link-card-name">${link.name}</span>
          <span class="link-card-domain">${link.domain}</span>
        </span>
        ${sm ? ICON_EXT_SM : ICON_EXT_MD}
      </span>
    `;
    return a;
  }

  function socialCard(link) {
    const a = document.createElement("a");
    a.className = "social-card";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.background = tint(link.platformColor);
    a.style.border = `1px solid ${borderTint(link.platformColor)}`;
    a.innerHTML = `
      <span class="social-card-bar" style="background:${link.platformColor}"></span>
      <span class="social-badge" style="background:${link.platformBg};color:${link.platformColor}">${link.platform}</span>
      <span class="social-name">${link.name}</span>
    `;
    return a;
  }

  function copyBtn(key, value) {
    const copied = copiedKey === key;
    const btn = el("button", "copy-btn" + (copied ? " copied" : ""), copied ? ICON_CHECK : ICON_COPY);
    btn.title = "Copy";
    btn.addEventListener("click", () => doCopy(key, value));
    return btn;
  }

  function grid(cls, items, renderFn) {
    const g = el("div", cls);
    for (const item of items) g.appendChild(renderFn(item));
    return g;
  }

  function renderPersonBlock(person) {
    const wrap = el("div", "person-block");

    wrap.appendChild(el("div", "person-head", `
      <span class="person-avatar" style="background:${person.avatarBg}">${person.initials}</span>
      <span class="person-meta">
        <span class="person-name">${person.name}</span>
        <span class="person-domain">${person.domain}</span>
      </span>
    `));

    if (person.websites && person.websites.length) {
      const sec = el("div", "person-section");
      sec.appendChild(miniLabel("Websites"));
      sec.appendChild(grid("website-grid", person.websites, l => linkCard(l, person.color, true)));
      wrap.appendChild(sec);
    }

    if (person.profileLinks && person.profileLinks.length) {
      const sec = el("div", "person-section");
      sec.appendChild(miniLabel("Profile"));
      sec.appendChild(grid("website-grid", person.profileLinks, l => linkCard(l, person.color, true)));
      wrap.appendChild(sec);
    }

    if (person.social && person.social.length) {
      const sec = el("div", "person-section");
      sec.appendChild(miniLabel("Social"));
      sec.appendChild(grid("social-grid", person.social, socialCard));
      wrap.appendChild(sec);
    }

    if (person.emails && person.emails.length) {
      const sec = el("div", "person-section");
      sec.appendChild(miniLabel("Contact"));
      const row = el("div", "email-row");
      for (const e of person.emails) {
        row.appendChild(el("div", "email-pill", `${ICON_MAIL}<span class="email-pill-value">${e}</span>`));
      }
      sec.appendChild(row);
      wrap.appendChild(sec);
    }

    return wrap;
  }

  function renderPersonTab(ids) {
    const wrap = document.createElement("div");
    for (const id of ids) wrap.appendChild(renderPersonBlock(PEOPLE[id]));
    return wrap;
  }

  function renderEducationTab() {
    const wrap = document.createElement("div");
    for (const sec of EDUCATION_SECTIONS) {
      const div = el("div", "category");
      div.appendChild(sectionHeader(sec.color, sec.label, sec.links.length));
      div.appendChild(grid("link-grid", sec.links, l => linkCard(l, sec.color, false)));
      wrap.appendChild(div);
    }
    return wrap;
  }

  function renderBrandsTab() {
    const wrap = document.createElement("div");

    for (const cat of BRAND_CATEGORIES) {
      const sec = el("div", "category");
      sec.appendChild(sectionHeader(cat.color, cat.name, cat.links.length));
      sec.appendChild(grid("link-grid", cat.links, l => linkCard(l, cat.color, false)));
      wrap.appendChild(sec);
    }

    const socialColor = "oklch(0.5 0.12 260)";
    const socialSec = el("div", "category");
    socialSec.appendChild(sectionHeader(socialColor, "Social Channels", BRAND_SOCIAL.length));
    socialSec.appendChild(grid("social-grid", BRAND_SOCIAL, socialCard));
    wrap.appendChild(socialSec);

    const contactSec = el("div");
    contactSec.appendChild(miniLabel("Brand Contacts"));
    const row = el("div", "email-row");
    for (const v of BRAND_EMAILS) {
      row.appendChild(el("div", "email-pill", `${ICON_MAIL}<span class="email-pill-value">${v}</span>`));
    }
    contactSec.appendChild(row);
    wrap.appendChild(contactSec);

    return wrap;
  }

  function renderPrivateTab() {
    const wrap = document.createElement("div");
    wrap.appendChild(sectionHeader(PRIVATE_COLOR, "Private", PRIVATE_LINKS.length));
    wrap.appendChild(grid("link-grid", PRIVATE_LINKS, l => linkCard(l, PRIVATE_COLOR, false)));
    return wrap;
  }

  function renderDirectoryTab() {
    const wrap = document.createElement("div");

    const domSec = el("div", "category");
    domSec.appendChild(sectionHeader("oklch(0.5 0.15 145)", "Root Domains", DOMAINS.length));
    const domGrid = el("div", "domain-grid");
    DOMAINS.forEach((d, i) => {
      const card = el("div", "domain-card");
      card.innerHTML = `<span class="domain-name">${d.name}</span>`;
      const actions = el("div", "domain-actions");
      const openA = el("a", "open-btn", ICON_EXT_SM.replace('style="flex-shrink:0;margin-top:2px;opacity:0.4"', 'style="opacity:0.5"'));
      openA.href = d.url;
      openA.target = "_blank";
      openA.rel = "noopener noreferrer";
      openA.title = "Open";
      actions.appendChild(openA);
      actions.appendChild(copyBtn("dom" + i, d.name));
      card.appendChild(actions);
      domGrid.appendChild(card);
    });
    domSec.appendChild(domGrid);
    wrap.appendChild(domSec);

    const emailSec = el("div");
    emailSec.appendChild(sectionHeader("oklch(0.55 0.14 55)", "Brand Emails", ALL_EMAILS.length));
    const emailGrid = el("div", "email-cell-grid");
    ALL_EMAILS.forEach((e, i) => {
      const card = el("div", "email-cell");
      const info = el("div", "email-cell-info");
      info.innerHTML = `<div class="email-cell-label">${e.label}</div><div class="email-cell-value">${e.email}</div>`;
      card.appendChild(info);
      card.appendChild(copyBtn("em" + i, e.email));
      emailGrid.appendChild(card);
    });
    emailSec.appendChild(emailGrid);
    wrap.appendChild(emailSec);

    return wrap;
  }

  function renderTabBar() {
    const bar = document.getElementById("tab-bar");
    bar.innerHTML = "";
    for (const tab of TABS) {
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (tab.id === activeTab ? " active" : "");
      btn.textContent = tab.label;
      btn.addEventListener("click", () => {
        if (activeTab === tab.id) return;
        activeTab = tab.id;
        renderTabBar();
        renderContent();
      });
      bar.appendChild(btn);
    }
  }

  function renderContent() {
    const container = document.getElementById("tab-content");
    container.innerHTML = "";
    if (TAB_GROUPS[activeTab]) container.appendChild(renderPersonTab(TAB_GROUPS[activeTab]));
    else if (activeTab === "education") container.appendChild(renderEducationTab());
    else if (activeTab === "brands") container.appendChild(renderBrandsTab());
    else if (activeTab === "directory") container.appendChild(renderDirectoryTab());
    else if (activeTab === "private") container.appendChild(renderPrivateTab());
  }

  renderTabBar();
  renderContent();
})();
