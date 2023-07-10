import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { PORTAL_CONTAINERS } from "../../constants";
import QuickNavLink from "./QuickNavLink";

export default function QuickNav(props: React.HTMLAttributes<HTMLDivElement>) {
  const navElRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handler = () => {
      if (!navElRef.current) return;
      const boundingClientRect = navElRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--quick-nav-height",
        `${boundingClientRect.height}px`,
      );
    };
    document.documentElement.classList.add("quick-nav-mounted");
    addEventListener("resize", handler);
    handler();
    return () => {
      document.documentElement.classList.remove("quick-nav-mounted");
      document.documentElement.style.setProperty("--quick-nav-height", "0px");
      removeEventListener("resize", handler);
    };
  }, []);

  return ReactDOM.createPortal(
    <nav {...props} className="quick-nav bs-1 z-1" ref={navElRef} />,
    PORTAL_CONTAINERS.quickNav as HTMLDivElement,
  );
}

QuickNav.Link = QuickNavLink;
