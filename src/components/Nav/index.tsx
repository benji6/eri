import "./style.css";
import * as React from "react";
import { CSSTransition } from "react-transition-group";
import CloseButton from "../../privateComponents/CloseButton";
import Mask from "../../privateComponents/Mask";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
import NavList from "./NavList";
import NavSubList from "./NavSubList";
import { PORTAL_CONTAINERS } from "../../constants";
import { getCssTime1 } from "../../utils/getCssVar";
import useIsWideResolution from "../../hooks/useIsWideResolution";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose(): void;
}

export default function Nav({ children, onClose, open, ...rest }: IProps) {
  const isWideResolution = useIsWideResolution();

  const navEl = (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
    <nav {...rest} className="nav" onClick={(e) => e.stopPropagation()}>
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
      <CSSTransition
        classNames="nav-"
        in={open}
        mountOnEnter
        timeout={{ exit: getCssTime1() + 100 }}
        unmountOnExit
      >
        {navEl}
      </CSSTransition>
    </Mask>
  );
}

Nav.Button = NavButton;
Nav.Link = NavLink;
Nav.List = NavList;
Nav.SubList = NavSubList;
