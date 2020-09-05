import "./style.css";
import * as React from "react";
import { CSSTransition } from "react-transition-group";
import CloseButton from "../../privateComponents/CloseButton";
import { DispatchContext } from "../EriProvider";
import Mask from "../../privateComponents/Mask";
import MenuButton from "./MenuButton";
import MenuLink from "./MenuLink";
import MenuList from "./MenuList";
import MenuSubList from "./MenuSubList";
import { getCssTime1 } from "../../utils/getCssVar";
import useIsWideResolution from "../../hooks/useIsWideResolution";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose(): void;
}

export default function Menu({ children, onClose, open, ...rest }: IProps) {
  const isWideResolution = useIsWideResolution();
  const dispatch = React.useContext(DispatchContext);

  React.useEffect(() => {
    dispatch({ payload: true, type: "menu/exists" });
    return () => dispatch({ payload: false, type: "menu/exists" });
  }, [dispatch]);

  return isWideResolution ? (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
    <nav {...rest} className="e-menu" onClick={(e) => e.stopPropagation()}>
      {children}
    </nav>
  ) : (
    <Mask onClose={onClose} open={open}>
      <CSSTransition
        classNames="e-menu-"
        in={open}
        mountOnEnter
        timeout={{ exit: getCssTime1() + 100 }}
        unmountOnExit
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        <nav {...rest} className="e-menu" onClick={(e) => e.stopPropagation()}>
          <div className="e-menu__close-button">
            <CloseButton onClick={onClose} />
          </div>
          {children}
        </nav>
      </CSSTransition>
    </Mask>
  );
}

Menu.Button = MenuButton;
Menu.Link = MenuLink;
Menu.List = MenuList;
Menu.SubList = MenuSubList;
