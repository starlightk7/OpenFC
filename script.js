// ===== Docs list =====
const DOC_PAGES = [
  { slug: "introduction",  file: "docs/introduction.md",  label: "Introduction", group: null },
  { slug: "bom",           file: "docs/bom.md",           label: "Parts Lists (BOM)",   group: null },
  { slug: "schematic",     file: "docs/schematic.md",     label: "Schematics",   group: null },

  { slug: "mainboard-design",  file: "docs/mainboard-design.md",  label: "Design", group: "main" },
  { slug: "mainboard-requirements",  file: "docs/mainboard-requirements.md",  label: "Requirements", group: "main" },
  { slug: "mainboard-assembly",      file: "docs/mainboard-assembly.md",      label: "Assembly",     group: "main" },
  { slug: "mainboard-debugging",     file: "docs/mainboard-debugging.md",     label: "Debugging",    group: "main" },

  { slug: "pwrav-design",  file: "docs/pwrav-design.md",  label: "Design", group: "pwrav" },
  { slug: "pwrav-requirements",  file: "docs/pwrav-requirements.md",  label: "Requirements", group: "pwrav" },
  { slug: "pwrav-assembly",      file: "docs/pwrav-assembly.md",      label: "Assembly",     group: "pwrav" },
  { slug: "pwrav-debugging",     file: "docs/pwrav-debugging.md",     label: "Debugging",    group: "pwrav" },

  { slug: "controller-design",  file: "docs/controller-design.md",  label: "Design", group: "controller" },
  { slug: "controller-requirements",  file: "docs/controller-requirements.md",  label: "Requirements", group: "controller" },
  { slug: "controller-assembly",      file: "docs/controller-assembly.md",      label: "Assembly",     group: "controller" },

  { slug: "faq",           file: "docs/faq.md",           label: "FAQ",          group: null },
];

// ===== Navigation groups =====
const NAV_GROUPS = {
  main: { label: "Motherboard", expanded: true },
  pwrav: { label: "Composite Power A/V", expanded: false },
  rf: { label: "RF Board", expanded: false },
  controller: { label: "Controllers", expanded: false }
};

// ===== Build sidebar =====
const navEl = document.getElementById("nav");
const docEl = document.getElementById("doc");

// Track expanded groups from localStorage - default to expanded if not set
const expandedGroups = JSON.parse(localStorage.getItem("nav_groups") || "{}");

// Set all defined groups to expanded by default if not in localStorage
Object.keys(NAV_GROUPS).forEach(groupKey => {
  if (expandedGroups[groupKey] === undefined) {
    expandedGroups[groupKey] = true;
  }
});

function isMobileView() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function getSidebar() {
  return document.getElementById("sidebar");
}

function getOverlay() {
  return document.querySelector(".sidebar-overlay");
}

function ensureOverlay() {
  let overlay = getOverlay();
  if (overlay) return overlay;

  overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  overlay.addEventListener("click", closeSidebar);
  document.body.appendChild(overlay);
  return overlay;
}

function setSidebarOpen(isOpen) {
  const sidebar = getSidebar();
  const overlay = ensureOverlay();
  if (!sidebar) return;

  sidebar.classList.toggle("open", isOpen);
  overlay.classList.toggle("show", isOpen);
  document.body.classList.toggle("drawer-open", isOpen && isMobileView());
}

function closeSidebar() {
  setSidebarOpen(false);
}

function openSidebar() {
  setSidebarOpen(true);
}

function toggleSidebar(forceOpen) {
  const sidebar = getSidebar();
  if (!sidebar) return;

  const nextState = typeof forceOpen === "boolean"
    ? forceOpen
    : !sidebar.classList.contains("open");

  setSidebarOpen(nextState);
}

window.toggleSidebar = toggleSidebar;

function bindHamburgerButtons() {
  const buttons = document.querySelectorAll(".hamburger");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleSidebar();
    });
  });
}

function syncDrawerForViewport() {
  if (!isMobileView()) {
    closeSidebar();
  } else {
    document.body.classList.toggle(
      "drawer-open",
      !!getSidebar() && getSidebar().classList.contains("open")
    );
  }
}

// Render groups and their pages
function renderNav() {
  navEl.innerHTML = "";

  DOC_PAGES.forEach((page, index) => {
    if (page.group === null) {
      const a = document.createElement("a");
      a.href = `#/${page.slug}`;
      a.textContent = page.label;
      a.dataset.slug = page.slug;
      navEl.appendChild(a);
    } else {
      if (index === 0 || DOC_PAGES[index - 1].group !== page.group) {
        const groupKey = page.group;
        const group = NAV_GROUPS[groupKey];
        if (!group) return;

        const groupHeader = document.createElement("div");
        groupHeader.className = "nav-group-header";
        groupHeader.dataset.group = groupKey;

        const groupTitle = document.createElement("span");
        groupTitle.textContent = group.label;

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "group-toggle" + (expandedGroups[groupKey] ? " expanded" : "");
        toggleBtn.setAttribute("aria-label", `Toggle ${group.label} group`);
        toggleBtn.setAttribute("aria-expanded", expandedGroups[groupKey] ? "true" : "false");

        groupHeader.appendChild(toggleBtn);
        groupHeader.appendChild(groupTitle);

        const groupContent = document.createElement("div");
        groupContent.className = "nav-group-content";
        groupContent.dataset.group = groupKey;
        if (expandedGroups[groupKey]) {
          groupContent.classList.add("expanded");
        }

        groupHeader.addEventListener("click", (e) => {
          if (e.target !== toggleBtn) return;
          expandedGroups[groupKey] = !expandedGroups[groupKey];
          localStorage.setItem("nav_groups", JSON.stringify(expandedGroups));

          groupContent.classList.toggle("expanded");
          toggleBtn.classList.toggle("expanded");
          toggleBtn.setAttribute("aria-expanded", expandedGroups[groupKey] ? "true" : "false");
        });

        navEl.appendChild(groupHeader);
        navEl.appendChild(groupContent);

        const a = document.createElement("a");
        a.href = `#/${page.slug}`;
        a.textContent = page.label;
        a.dataset.slug = page.slug;
        groupContent.appendChild(a);
      } else {
        const existingGroupContent = navEl.lastElementChild;
        if (existingGroupContent && existingGroupContent.classList.contains("nav-group-content")) {
          const a = document.createElement("a");
          a.href = `#/${page.slug}`;
          a.textContent = page.label;
          a.dataset.slug = page.slug;
          existingGroupContent.appendChild(a);
        }
      }
    }
  });
}

renderNav();

navEl.addEventListener("click", (e) => {
  if (isMobileView() && e.target.tagName === "A") {
    closeSidebar();
  }
});

// ===== Router & loader =====
function currentSlug() {
  const m = location.hash.match(/^#\/([^/?#]+)/);
  return m ? m[1] : DOC_PAGES[0].slug;
}

async function loadPage(slug) {
  [...navEl.querySelectorAll("a")].forEach(a => a.classList.toggle("active", a.dataset.slug === slug));
  const page = DOC_PAGES.find(p => p.slug === slug) || DOC_PAGES[0];

  if (isMobileView()) {
    window.scrollTo(0, 0);
  } else if (docEl) {
    docEl.scrollTop = 0;
    const contentEl = document.querySelector(".content");
    if (contentEl) contentEl.scrollTop = 0;
  }

  try {
    const res = await fetch(page.file, { cache: "no-store" });
    if (!res.ok) {
      docEl.innerHTML = `<p style="color:red">Page not found: <code>${page.file}</code></p>`;
      return;
    }

    const md = await res.text();
    docEl.innerHTML = marked.parse(md, { mangle: false, headerIds: true });
    docEl.querySelectorAll("img").forEach(img => {
      const alt = img.getAttribute("alt") || "";
      const sizeMatch = alt.match(/\|(\d+)(x(\d+))?/);
      if (sizeMatch) {
        img.style.width = `${sizeMatch[1]}px`;
        if (sizeMatch[3]) img.style.height = `${sizeMatch[3]}px`;
        img.alt = alt.replace(sizeMatch[0], "").trim();
      }
    });

    docEl.querySelectorAll("a").forEach(a => {
      const href = a.getAttribute("href");
      if (href && (href.startsWith("http") || href.startsWith("../ibom/") || href.endsWith(".html"))) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
    });

    mediumZoom(docEl.querySelectorAll("img"), { background: "rgba(0,0,0,0.85)", margin: 24 });
  } catch (e) {
    docEl.innerHTML = `<p>Failed to load <code>${page.file}</code>: ${String(e)}</p>`;
  }
}

function initSidebarUi() {
  ensureOverlay();
  bindHamburgerButtons();
  syncDrawerForViewport();

  window.addEventListener("resize", syncDrawerForViewport);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSidebarUi, { once: true });
} else {
  initSidebarUi();
}

window.addEventListener("hashchange", () => loadPage(currentSlug()));
loadPage(currentSlug());
