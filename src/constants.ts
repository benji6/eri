import "./portals.css";

function createPortalContainer(id?: string): HTMLDivElement | undefined {
  if (typeof document === "undefined") return;
  const container = document.createElement("div");
  if (id) container.id = `${id}-portal`;
  return document.body.appendChild(container);
}

// Order is important here so that things are layered correctly

export const PORTAL_CONTAINERS = {
  fab: createPortalContainer(),
  quickNav: createPortalContainer("quick-nav"),
  nav: createPortalContainer(),
  dialog: createPortalContainer(),
} as const;
