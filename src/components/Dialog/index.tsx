import "./style.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import CloseButton from "../../privateComponents/CloseButton";
import { PORTAL_CONTAINERS } from "../../constants";

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
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (!dialogRef.current) throw Error("`dialogRef.current` not defined");
    dialogRef.current.onclose = onClose;
  }, [onClose]);

  const closeDialog = React.useCallback(() => {
    if (!dialogRef.current) return;
    dialogRef.current.setAttribute("data-closing", "");

    dialogRef.current.addEventListener(
      "animationend",
      () => {
        if (!dialogRef.current) return;
        dialogRef.current.removeAttribute("data-closing");
        dialogRef.current.close();
      },
      { once: true },
    );
  }, []);

  React.useEffect(() => {
    if (!dialogRef.current || dialogRef.current.open === open) return;
    if (open) return dialogRef.current.showModal();
    closeDialog();
  }, [closeDialog, open]);

  return ReactDOM.createPortal(
    /*eslint-disable-next-line jsx-a11y/click-events-have-key-events*/
    <dialog
      {...rest}
      aria-describedby="dialog-desc"
      aria-labelledby="dialog-title"
      className="br-1 bs-1 p-0"
      onClick={
        disableClose
          ? undefined
          : (e) => {
              if (e.target === dialogRef.current) closeDialog();
            }
      }
      ref={dialogRef}
    >
      {/* This div allows us to check the target on dialog click events (see above)
        and tells us whether the click was on the backdrop or not */}
      <div className="dialog__container">
        <div className="dialog__header">
          <h3 id="dialog-title">{title}</h3>
          <div className="dialog__close-button-container">
            <CloseButton
              disabled={disableClose || !open}
              onClick={() => closeDialog()}
            />
          </div>
        </div>
        <div id="dialog-desc">{children}</div>
      </div>
    </dialog>,
    PORTAL_CONTAINERS.dialog!,
  );
}
