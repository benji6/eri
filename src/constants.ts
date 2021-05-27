// The number of highlight colors defined in CSS
export const HIGHLIGHT_COLOR_COUNT = 6;

function createPortalContainer(): HTMLDivElement | undefined {
  if (typeof document === "undefined") return;
  return document.body.appendChild(document.createElement("div"));
}

// Order is important here so that things are layered correctly
/* eslint-disable sort-keys */
export const PORTAL_CONTAINERS = {
  fab: createPortalContainer(),
  quickNav: createPortalContainer(),
  nav: createPortalContainer(),
  dialog: createPortalContainer(),
} as const;
/* eslint-enable sort-keys */
