(function () {
  const EXTERNAL_ICON = `
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2.2"
      stroke-linecap="round" stroke-linejoin="round" class="link-icon" stroke="#aaa">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>`;

  function renderCategory(cat) {
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

    const grid = document.createElement("div");
    grid.className = "link-grid";
    for (const link of cat.links) {
      const a = document.createElement("a");
      a.className = "link-card";
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `
        <span class="link-card-bar" style="background:${cat.color}"></span>
        <span class="link-card-row">
          <span class="link-card-text">
            <span class="link-card-name">${link.name}</span>
            <span class="link-card-domain">${link.domain}</span>
          </span>
          ${EXTERNAL_ICON}
        </span>
      `;
      grid.appendChild(a);
    }
    section.appendChild(grid);
    return section;
  }

  function render() {
    const container = document.getElementById("categories");
    const totalCount = CATEGORIES.reduce((sum, c) => sum + c.links.length, 0);
    document.getElementById("total-count").textContent = totalCount;
    document.getElementById("total-count-footer").textContent = totalCount;
    document.getElementById("cat-count").textContent = CATEGORIES.length;
    for (const cat of CATEGORIES) container.appendChild(renderCategory(cat));
  }

  render();
})();
