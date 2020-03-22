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
        classNames="e-dialog-"
        in={open}
        mountOnEnter
        timeout={{ exit: getCssTime1() + 100 }}
        unmountOnExit
      >
        {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          {...rest}
          aria-describedby="e-dialog-desc"
          aria-labelledby="e-dialog-title"
          className="e-dialog"
          onClick={disableClose ? undefined : onClose}
          role="dialog"
        >
          <div
            className="e-dialog__dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="e-dialog__content">
              <div className="e-dialog__header">
                <h4 id="e-dialog-title">{title}</h4>
                <div className="e-dialog__close-button-container">
                  <CloseButton
                    disabled={disableClose || !open}
                    onClick={onClose}
                  />
                </div>
              </div>
              <div id="e-dialog-desc">{children}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Mask>
  );
}
