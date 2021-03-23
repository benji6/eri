import "./style.css";
import * as React from "react";
import { EriStateContext } from "../EriProvider";

export type IProps = React.HTMLAttributes<HTMLElement>;

export default function Main(props: IProps) {
  const state = React.useContext(EriStateContext);
  const className = `e-main flex${state.navExists ? " e-main--nav-space" : ""}`;

  const mainElRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (state.quickNavHeight === null || !mainElRef.current) return;
    mainElRef.current.style.marginBottom = `${state.quickNavHeight}px`;
  }, [mainElRef, state.quickNavHeight]);

  return <main {...props} className={className} ref={mainElRef} />;
}
