import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { EriDispatchContext } from "../EriProvider";
import { PORTAL_CONTAINERS } from "../../constants";
import QuickNavLink from "./QuickNavLink";
import useIsWideResolution from "../../hooks/useIsWideResolution";
import useShouldRenderQuickNav from "../../hooks/useShouldRenderQuickNav";

export default function QuickNav(props: React.HTMLAttributes<HTMLDivElement>) {
  const dispatch = React.useContext(EriDispatchContext);
  const navElRef = React.useRef<HTMLElement>(null);
  const isWideResolution = useIsWideResolution();
  const shouldRenderQuickNav = useShouldRenderQuickNav();

  React.useEffect(() => {
    dispatch({ type: "quickNav/mount" });
    return () => dispatch({ type: "quickNav/unMount" });
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

  if (!shouldRenderQuickNav) return null;

  return ReactDOM.createPortal(
    <nav {...props} className="quick-nav bs-1 z-1" ref={navElRef} />,
    PORTAL_CONTAINERS.quickNav as HTMLDivElement
  );
}

QuickNav.Link = QuickNavLink;
