import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DispatchContext } from "../EriProvider";
import QuickNavLink from "./QuickNavLink";
import useIsWideResolution from "../../hooks/useIsWideResolution";

const portalEl =
  typeof document !== "undefined" &&
  document.body.appendChild(document.createElement("div"));

export default function QuickNav(props: React.HTMLAttributes<HTMLDivElement>) {
  const dispatch = React.useContext(DispatchContext);
  const navElRef = React.useRef<HTMLElement>(null);
  const isWideResolution = useIsWideResolution();

  React.useEffect(() => {
    if (isWideResolution || !navElRef.current) return;
    const boundingClientRect = navElRef.current.getBoundingClientRect();
    dispatch({
      payload: innerHeight - boundingClientRect.top,
      type: "quickNav/height",
    });
    return () => dispatch({ payload: 0, type: "quickNav/height" });
  }, [dispatch, isWideResolution, navElRef]);

  if (!portalEl || isWideResolution) return null;

  return ReactDOM.createPortal(
    <nav {...props} className="e-quick-nav" ref={navElRef} />,
    portalEl
  );
}

QuickNav.Link = QuickNavLink;
