import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { EriStateContext } from "../EriProvider";
import { PORTAL_CONTAINERS } from "../../constants";
import { getCssTime0 } from "../../utils/getCssVar";

const PORTAL_EL = PORTAL_CONTAINERS.fab;

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hide?: boolean;
}

export default function Fab({
  hide = false,
  type = "submit", // Formik gets grumpy if you don't specify this
  ...rest
}: IProps) {
  const state = React.useContext(EriStateContext);

  if (state.renderingToString || !PORTAL_EL) return null;

  return ReactDOM.createPortal(
    <CSSTransition
      classNames="fab-"
      in={!hide}
      mountOnEnter
      timeout={{ exit: getCssTime0() + 100 }}
      unmountOnExit
    >
      <button
        {...rest}
        className={`fab${
          state.quickNavMounted ? " fab--quick-nav-mounted" : ""
        } br-max p-3 z-1`}
        type={type}
      />
    </CSSTransition>,
    PORTAL_EL
  );
}
