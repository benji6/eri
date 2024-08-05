import "./style.css";
import * as ReactDOM from "react-dom";
import {
  HTMLAttributes,
  KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
} from "react";
import { getCssTime1 } from "../../utils/getCssVar";
import useTransition from "react-transition-state";

interface IProps extends HTMLAttributes<HTMLDivElement> {
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
  const handleKeyDown = useCallback(
    (e: KeyboardEvent | ReactKeyboardEvent<HTMLDivElement>) => {
      if (open && onClose && e.code === "Escape") onClose();
    },
    [onClose, open],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const [transitionState, toggle] = useTransition({
    initialEntered: open,
    mountOnEnter: true,
    preEnter: true,
    timeout: getCssTime1() + 100,
    unmountOnExit: true,
  });
  useEffect(() => toggle(open), [open]);

  if (!portalContainer) return;

  return ReactDOM.createPortal(
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div onKeyDown={handleKeyDown}>
      {transitionState.isMounted && (
        <div
          className={`mask__mask z-3 mask__mask--${transitionState.status}`}
          onClick={onClose}
        />
      )}
      <div {...rest} className="mask__container z-3" />
    </div>,
    /* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    portalContainer,
  );
}
