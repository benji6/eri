import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { EriStateContext } from "../EriProvider";
import { getCssTime0 } from "../../utils/getCssVar";
import useShouldRenderQuickNav from "../../hooks/useShouldRenderQuickNav";

const portalEl =
  typeof document !== "undefined" &&
  document.body.appendChild(document.createElement("div"));

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hide?: boolean;
}

export default function Fab({
  hide = false,
  type = "submit", // Formik gets grumpy if you don't specify this
  ...rest
}: IProps) {
  const state = React.useContext(EriStateContext);
  const shouldRenderQuickNav = useShouldRenderQuickNav();

  if (state.renderingToString || shouldRenderQuickNav || !portalEl) return null;

  return ReactDOM.createPortal(
    <CSSTransition
      classNames="e-fab-"
      in={!hide}
      mountOnEnter
      timeout={{ exit: getCssTime0() + 100 }}
      unmountOnExit
    >
      <button {...rest} className="e-fab" type={type} />
    </CSSTransition>,
    portalEl
  );
}
