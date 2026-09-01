(function () {
  const EXTERNAL_ICON_SM = `
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke-width="2.2"
      stroke-linecap="round" stroke-linejoin="round" class="link-icon link-icon-sm" stroke="#aaa">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>`;
  const EXTERNAL_ICON_MD = `
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2.2"
      stroke-linecap="round" stroke-linejoin="round" class="link-icon link-icon-md" stroke="#aaa">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>`;
  const MAIL_ICON = `
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3a3a52" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>`;

  let activeTab = DEFAULT_TAB;

  function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function sectionHeader(dotColor, label, labelColor, count) {
    return el("div", "section-header", `
      <span class="section-dot" style="background:${dotColor}"></span>
      <span class="section-label" style="color:${labelColor}">${label}</span>
      <span class="section-count">${count}</span>
    `);
  }

  function brandCard(link, accentColor) {
    const a = document.createElement("a");
    a.className = "link-card";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <span class="link-card-bar" style="background:${accentColor}; opacity:0.7"></span>
      <span class="link-card-row">
        <span class="link-card-text">
          <span class="link-card-name">${link.name}</span>
          <span class="link-card-domain">${link.domain}</span>
        </span>
        ${EXTERNAL_ICON_MD}
      </span>
    `;
    return a;
  }

  function websiteCard(link, accentColor) {
    const a = document.createElement("a");
    a.className = "website-card";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <span class="link-card-bar" style="background:${accentColor}; opacity:0.75"></span>
      <span class="link-card-row">
        <span class="link-card-text">
          <span class="website-card-name">${link.name}</span>
          <span class="link-card-domain">${link.domain}</span>
        </span>
        ${EXTERNAL_ICON_SM}
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
    a.innerHTML = `
      <span class="social-card-bar" style="background:${link.platformColor}"></span>
      <span class="social-badge" style="background:${link.platformBg}; color:${link.platformColor}">${link.platform}</span>
      <span class="social-name">${link.name}</span>
    `;
    return a;
  }

  function domainCard(domain) {
    const a = document.createElement("a");
    a.className = "domain-card";
    a.href = domain.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `<span class="domain-name">${domain.name}</span>${EXTERNAL_ICON_SM}`;
    return a;
  }

  function emailPill(value) {
    return el("div", "email-pill", `${MAIL_ICON}<span class="email-pill-value">${value}</span>`);
  }

  function emailCell(item) {
    return el("div", "email-cell", `
      <div class="email-cell-label">${item.label}</div>
      <div class="email-cell-value">${item.email}</div>
    `);
  }

  function grid(className, items, renderFn) {
    const g = el("div", className);
    for (const item of items) g.appendChild(renderFn(item));
    return g;
  }

  function miniLabel(text, tight) {
    return el("p", "mini-label" + (tight ? " mini-label-tight" : ""), text);
  }

  function renderPersonTab(person) {
    const wrap = document.createElement("div");

    const head = el("div", "person-head", `
      <span class="person-avatar" style="background:${person.avatarBg}">${person.initials}</span>
      <span class="person-meta">
        <span class="person-name">${person.name}</span>
        <span class="person-domain">${person.domain}</span>
      </span>
    `);
    wrap.appendChild(head);

    if (person.websites.length) {
      const section = el("div", "person-section");
      section.appendChild(miniLabel("Websites"));
      section.appendChild(grid("website-grid", person.websites, (l) => websiteCard(l, person.color)));
      wrap.appendChild(section);
    }

    if (person.social.length) {
      const section = el("div", "person-section");
      section.appendChild(miniLabel("Social"));
      section.appendChild(grid("social-grid", person.social, socialCard));
      wrap.appendChild(section);
    }

    if (person.emails.length) {
      const section = el("div");
      section.appendChild(miniLabel("Contact"));
      const row = el("div", "email-row");
      for (const value of person.emails) row.appendChild(emailPill(value));
      section.appendChild(row);
      wrap.appendChild(section);
    }

    return wrap;
  }

  function renderBrandsTab() {
    const wrap = document.createElement("div");

    for (const cat of BRAND_CATEGORIES) {
      const section = el("section", "category");
      section.appendChild(sectionHeader(cat.color, cat.name, cat.color, cat.links.length));
      section.appendChild(grid("link-grid", cat.links, (l) => brandCard(l, cat.color)));
      wrap.appendChild(section);
    }

    const socialSection = el("section", "category");
    socialSection.appendChild(sectionHeader("oklch(0.65 0.12 260)", "Social Channels", "oklch(0.65 0.12 260)", BRAND_SOCIAL.length));
    socialSection.appendChild(grid("social-grid", BRAND_SOCIAL, socialCard));
    wrap.appendChild(socialSection);

    const contactSection = el("div");
    contactSection.appendChild(miniLabel("Brand Contacts", true));
    const row = el("div", "email-row");
    for (const value of BRAND_EMAILS) row.appendChild(emailPill(value));
    contactSection.appendChild(row);
    wrap.appendChild(contactSection);

    return wrap;
  }

  function renderDirectoryTab() {
    const wrap = document.createElement("div");

    const domainsSection = el("section", "category");
    domainsSection.appendChild(sectionHeader("oklch(0.7 0.15 145)", "Root Domains", "oklch(0.7 0.15 145)", DOMAINS.length));
    domainsSection.appendChild(grid("domain-grid", DOMAINS, domainCard));
    wrap.appendChild(domainsSection);

    const emailsSection = el("section");
    emailsSection.appendChild(sectionHeader("oklch(0.7 0.14 55)", "Brand Emails", "oklch(0.7 0.14 55)", ALL_EMAILS.length));
    emailsSection.appendChild(grid("email-cell-grid", ALL_EMAILS, emailCell));
    wrap.appendChild(emailsSection);

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
    if (PERSON_IDS.includes(activeTab)) container.appendChild(renderPersonTab(PEOPLE[activeTab]));
    else if (activeTab === "directory") container.appendChild(renderDirectoryTab());
    else container.appendChild(renderBrandsTab());
  }

  renderTabBar();
  renderContent();
})();
