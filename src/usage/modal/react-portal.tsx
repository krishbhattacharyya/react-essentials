import React, { useRef, useState } from "react";
import ModalReactPortal from "../../useconcepts/modal/modal-react-portal";
export default function ReactPortalExample() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [showModalReactPortal, setShowModalReactPortal] = useState(false);
  
  return (
    <>
      <h3>React using portal</h3>
      <div className="App">
        <button onClick={() => setShowModalReactPortal(true)}>
          open modal
        </button>
        <ModalReactPortal
          show={showModalReactPortal}
          close={() => setShowModalReactPortal(false)}
          ref={modalRef}
        >
          Modal Content
        </ModalReactPortal>
      </div>
    </>
  );
}
