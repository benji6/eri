import "./style.css";
import * as ReactDOM from "react-dom";
import { ButtonHTMLAttributes, useEffect } from "react";
import { PORTAL_CONTAINERS } from "../../constants";
import { getCssTime0 } from "../../utils/getCssVar";
import useTransition from "react-transition-state";

const PORTAL_EL = PORTAL_CONTAINERS.fab;

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hide?: boolean;
}

export default function Fab({
  hide = false,
  type = "submit", // Formik gets grumpy if you don't specify this
  ...rest
}: IProps) {
  const [transitionState, toggle] = useTransition({
    initialEntered: true,
    mountOnEnter: true,
    preEnter: true,
    timeout: getCssTime0() + 100,
    unmountOnExit: true,
  });
  useEffect(() => toggle(!hide), [hide]);

  if (!PORTAL_EL) return;

  return ReactDOM.createPortal(
    transitionState.isMounted && (
      <button
        {...rest}
        className={`fab br-max p-3 z-1 fab--${transitionState.status}`}
        type={type}
      />
    ),
    PORTAL_EL,
  );
}
