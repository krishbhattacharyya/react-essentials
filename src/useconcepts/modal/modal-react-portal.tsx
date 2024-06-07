import React, {forwardRef} from "react";
import { createPortal } from "react-dom";
import classes from "./modal-react-portal.module.css";
const ModalReactPortal = forwardRef(function ModalReactPortalinner({ show, children, close }: { show: boolean; children: React.ReactNode; close: () => void; },ref:any) {
  if (!show) {
    return null;
  }
  return (
    <>
      {
      createPortal(
        <>
          <div className={classes.modalWrapper} ref={ref}></div>
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
})

export default ModalReactPortal; 