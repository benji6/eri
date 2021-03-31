import "./style.css";
import * as React from "react";
import { CSSTransition } from "react-transition-group";
import CloseButton from "../../privateComponents/CloseButton";
import Mask from "../../privateComponents/Mask";
import { getCssTime1 } from "../../utils/getCssVar";

interface IProps {
  children: React.ReactNode;
  disableClose?: boolean;
  open: boolean;
  title: React.ReactNode;
  onClose(): void;
}

export default function Dialog({
  children,
  disableClose,
  onClose,
  open,
  title,
  ...rest
}: IProps) {
  return (
    <Mask onClose={disableClose ? undefined : onClose} open={open}>
      <CSSTransition
        classNames="dialog-"
        in={open}
        mountOnEnter
        timeout={{ exit: getCssTime1() + 100 }}
        unmountOnExit
      >
        {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          {...rest}
          aria-describedby="dialog-desc"
          aria-labelledby="dialog-title"
          className="dialog flex"
          onClick={disableClose ? undefined : onClose}
          role="dialog"
        >
          <div
            className="dialog__dialog br-1 bs-1 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="dialog__header flex">
                <h3 id="dialog-title">{title}</h3>
                <div className="dialog__close-button-container">
                  <CloseButton
                    disabled={disableClose || !open}
                    onClick={onClose}
                  />
                </div>
              </div>
              <div id="dialog-desc">{children}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Mask>
  );
}
