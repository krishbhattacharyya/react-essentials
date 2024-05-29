import React, { useState } from "react";
import ModalReactPortal from "../useconcepts/modal-react-portal";
export default function ReactPortalExample() {
  const [showModalReactPortal, setShowModalReactPortal] =
    useState<boolean>(false);
  return (
    <>
      <h3>React portal</h3>
      <div className="App">
        <button onClick={() => setShowModalReactPortal(true)}>
          open modal
        </button>
        <ModalReactPortal
          show={showModalReactPortal}
          close={() => setShowModalReactPortal(false)}
        >
          Modal Content
        </ModalReactPortal>
      </div>
    </>
  );
}
