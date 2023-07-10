import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { getCssTime1 } from "../../utils/getCssVar";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
  portalContainer: HTMLDivElement | undefined;
}

export default function Mask({
  onClose,
  open,
  portalContainer,
  ...rest
}: IProps) {
  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>) => {
      if (open && onClose && e.code === "Escape") onClose();
    },
    [onClose, open],
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!portalContainer) return null;

  return ReactDOM.createPortal(
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div onKeyDown={handleKeyDown}>
      <CSSTransition
        classNames="mask__mask-"
        in={open}
        mountOnEnter
        timeout={{ exit: getCssTime1() + 100 }}
        unmountOnExit
      >
        <div className="mask__mask z-3" onClick={onClose} />
      </CSSTransition>
      <div {...rest} className="mask__container z-3" />
    </div>,
    /* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    portalContainer,
  );
}
