import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { EriStateContext } from "../../components/EriProvider";
import { getCssTime1 } from "../../utils/getCssVar";

const portalEl =
  typeof document !== "undefined" &&
  document.body.appendChild(document.createElement("div"));

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
}

const handleKeyDown = (onClose: IProps["onClose"]) => (
  e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>
) => {
  if (e.keyCode === 27 && onClose) onClose();
};

export default function Mask({ onClose, open, ...rest }: IProps) {
  const state = React.useContext(EriStateContext);
  const [scrollY, setScrollY] = React.useState(0);

  const openMask = () => {
    setScrollY(window.scrollY);
    document.documentElement.style.top = `${-window.scrollY}px`;
    document.documentElement.classList.add("no-scroll");
  };

  React.useEffect(() => {
    const keyDownListener = handleKeyDown(onClose);
    if (open) openMask();
    window.addEventListener("keydown", keyDownListener);
    return () => {
      window.removeEventListener("keydown", keyDownListener);
      document.documentElement.classList.remove("no-scroll");
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (open) openMask();
    else {
      document.documentElement.classList.remove("no-scroll");
      window.scrollTo(0, scrollY);
      document.documentElement.style.removeProperty("top");
    }
  }, [open, scrollY]);

  if (state.renderingToString || !portalEl) return null;

  return ReactDOM.createPortal(
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div onKeyDown={handleKeyDown(onClose)}>
      <CSSTransition
        classNames="e-mask__mask-"
        in={open}
        mountOnEnter
        timeout={{ exit: getCssTime1() + 100 }}
        unmountOnExit
      >
        <div className="e-mask__mask" onClick={onClose} />
      </CSSTransition>
      <div {...rest} className="e-mask__container" />
    </div>,
    /* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    portalEl
  );
}
