import "./style.css";
import * as React from "react";
import { StateContext } from "../EriProvider";

export default function Main(props: React.HTMLAttributes<HTMLElement>) {
  const state = React.useContext(StateContext);
  const className = `e-main${state.menuExists ? " e-main--menu-space" : ""}`;

  const mainElRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (state.quickNavHeight === null || !mainElRef.current) return;
    mainElRef.current.style.marginBottom = `${state.quickNavHeight}px`;
  }, [mainElRef, state.quickNavHeight]);

  return <main {...props} className={className} ref={mainElRef} />;
}
