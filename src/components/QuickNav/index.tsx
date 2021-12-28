import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { PORTAL_CONTAINERS } from "../../constants";
import QuickNavLink from "./QuickNavLink";
import useIsWideResolution from "../../hooks/useIsWideResolution";

export default function QuickNav(props: React.HTMLAttributes<HTMLDivElement>) {
  const navElRef = React.useRef<HTMLElement>(null);
  const isWideResolution = useIsWideResolution();

  React.useEffect(() => {
    document.documentElement.classList.add("quick-nav-mounted");
    return () => {
      document.documentElement.classList.remove("quick-nav-mounted");
      document.documentElement.style.setProperty("--quick-nav-height", "0px");
    };
  }, []);

  React.useEffect(() => {
    if (isWideResolution || !navElRef.current) return;
    const boundingClientRect = navElRef.current.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--quick-nav-height",
      `${boundingClientRect.height}px`
    );
    return () =>
      document.documentElement.style.setProperty("--quick-nav-height", "0px");
  }, [isWideResolution, navElRef]);

  return ReactDOM.createPortal(
    <nav {...props} className="quick-nav bs-1 z-1" ref={navElRef} />,
    PORTAL_CONTAINERS.quickNav as HTMLDivElement
  );
}

QuickNav.Link = QuickNavLink;
