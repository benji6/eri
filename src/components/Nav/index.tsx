import "./style.css";
import { HTMLAttributes, useEffect } from "react";
import CloseButton from "../../privateComponents/CloseButton";
import Mask from "../../privateComponents/Mask";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
import NavList from "./NavList";
import NavSubList from "./NavSubList";
import { PORTAL_CONTAINERS } from "../../constants";
import { getCssTime1 } from "../../utils/getCssVar";
import useIsWideResolution from "../../hooks/useIsWideResolution";
import useTransition from "react-transition-state";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose(): void;
}

export default function Nav({ children, onClose, open, ...rest }: IProps) {
  const isWideResolution = useIsWideResolution();
  const [transitionState, toggle] = useTransition({
    initialEntered: open,
    mountOnEnter: true,
    preEnter: true,
    timeout: getCssTime1() + 100,
    unmountOnExit: true,
  });
  useEffect(() => toggle(open), [open]);

  const navEl = (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
    <nav
      {...rest}
      className={`nav nav--${transitionState.status}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="nav__close-button">
        <CloseButton onClick={onClose} />
      </div>
      {children}
    </nav>
  );

  return isWideResolution ? (
    navEl
  ) : (
    <Mask onClose={onClose} open={open} portalContainer={PORTAL_CONTAINERS.nav}>
      {transitionState.isMounted && navEl}
    </Mask>
  );
}

Nav.Button = NavButton;
Nav.Link = NavLink;
Nav.List = NavList;
Nav.SubList = NavSubList;
