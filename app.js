(function () {
  const EXTERNAL_ICON = `
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2.2"
      stroke-linecap="round" stroke-linejoin="round" class="link-icon" stroke="#aaa">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>`;

  let activeTab = DEFAULT_TAB;

  function linkCard(link, accentColor, barOpacity) {
    const a = document.createElement("a");
    a.className = "link-card";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <span class="link-card-bar" style="background:${accentColor}; opacity:${barOpacity}"></span>
      <span class="link-card-row">
        <span class="link-card-text">
          <span class="link-card-name">${link.name}</span>
          <span class="link-card-domain">${link.domain}</span>
        </span>
        ${EXTERNAL_ICON}
      </span>
    `;
    return a;
  }

  function linkGrid(links, accentColor, barOpacity) {
    const grid = document.createElement("div");
    grid.className = "link-grid";
    for (const link of links) grid.appendChild(linkCard(link, accentColor, barOpacity));
    return grid;
  }

  function renderPersonTab(person) {
    const wrap = document.createElement("div");

    const head = document.createElement("div");
    head.className = "person-head";
    head.innerHTML = `
      <span class="person-avatar" style="background:${person.gradient}">${person.initials}</span>
      <span class="person-meta">
        <span class="person-name">${person.name}</span>
        <span class="person-domain">${person.domain}</span>
      </span>
    `;
    wrap.appendChild(head);
    wrap.appendChild(linkGrid(person.links, person.accentColor, 0.75));
    return wrap;
  }

  function renderBrandsTab() {
    const wrap = document.createElement("div");
    for (const cat of BRAND_CATEGORIES) {
      const section = document.createElement("section");
      section.className = "category";

      const header = document.createElement("div");
      header.className = "category-header";
      header.innerHTML = `
        <span class="category-dot" style="background:${cat.color}"></span>
        <span class="category-name" style="color:${cat.color}">${cat.name}</span>
        <span class="category-count">${cat.links.length}</span>
      `;
      section.appendChild(header);
      section.appendChild(linkGrid(cat.links, cat.color, 0.7));
      wrap.appendChild(section);
    }
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
    if (activeTab === "yatendra") container.appendChild(renderPersonTab(PEOPLE.yatendra));
    else if (activeTab === "vikas") container.appendChild(renderPersonTab(PEOPLE.vikas));
    else container.appendChild(renderBrandsTab());
  }

  renderTabBar();
  renderContent();
})();
