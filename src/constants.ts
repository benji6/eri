import "./portals.css";

// The number of highlight colors defined in CSS
export const HIGHLIGHT_COLOR_COUNT = 6;

function createPortalContainer(id?: string): HTMLDivElement | undefined {
  if (typeof document === "undefined") return;
  const container = document.createElement("div");
  if (id) container.id = `e-portal-${id}`;
  return document.body.appendChild(container);
}

// Order is important here so that things are layered correctly
/* eslint-disable sort-keys */
export const PORTAL_CONTAINERS = {
  fab: createPortalContainer(),
  quickNav: createPortalContainer("quick-nav"),
  nav: createPortalContainer(),
  dialog: createPortalContainer(),
} as const;
/* eslint-enable sort-keys */
