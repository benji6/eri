import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { EriDispatchContext } from "../EriProvider";
import { PORTAL_CONTAINERS } from "../../constants";
import QuickNavLink from "./QuickNavLink";
import useIsWideResolution from "../../hooks/useIsWideResolution";

export default function QuickNav(props: React.HTMLAttributes<HTMLDivElement>) {
  const dispatch = React.useContext(EriDispatchContext);
  const navElRef = React.useRef<HTMLElement>(null);
  const isWideResolution = useIsWideResolution();

  React.useEffect(() => {
    document.documentElement.classList.add("quick-nav-mounted");
    return () => {
      document.documentElement.classList.remove("quick-nav-mounted");
      dispatch({ payload: 0, type: "quickNav/height" });
    };
  }, [dispatch]);

  React.useEffect(() => {
    if (isWideResolution || !navElRef.current) return;
    const boundingClientRect = navElRef.current.getBoundingClientRect();
    dispatch({
      payload: boundingClientRect.height,
      type: "quickNav/height",
    });
    return () => dispatch({ payload: 0, type: "quickNav/height" });
  }, [dispatch, isWideResolution, navElRef]);

  return ReactDOM.createPortal(
    <nav {...props} className="quick-nav bs-1 z-1" ref={navElRef} />,
    PORTAL_CONTAINERS.quickNav as HTMLDivElement
  );
}

QuickNav.Link = QuickNavLink;
