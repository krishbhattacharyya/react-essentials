import React from "react";
import { createPortal } from "react-dom";
import classes from "./modal-react-portal.module.css";
export default function ModalReactPortal({
  show,
  children,
  close,
}: {
  show: boolean;
  children: React.ReactNode;
  close: () => void;
}) {
  if (!show) {
    return null;
  }
  return (
    <>
      {
      createPortal(
        <>
          <div className={classes.modalWrapper}></div>
          <div className={classes.modalContent}>
            <div className={classes.modalHeading}>
              <button onClick={close}>close</button>
            </div>
            {children}
          </div>
        </>,
        document.body
      )}
    </>
  );
}
