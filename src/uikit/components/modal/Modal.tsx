import React, { FC, useEffect } from "react";
import "./Modal.css";

type Props = {
  children: React.ReactNode;
  toggleModal: () => void;
  customStyles?: React.CSSProperties;
  customContainerStyles?: React.CSSProperties;
  isShown: boolean;
};

const Modal: FC<Props> = ({
  children,
  toggleModal,
  customStyles,
  customContainerStyles,
  isShown,
}) => {
  useEffect(() => {
    if (isShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isShown]);

  const onToggleModal = () => {
    toggleModal();
  };

  if (!isShown) return null;

  return (
    <div className="modal-root">
      <div className="modal-backdrop" onClick={onToggleModal} />
      <div className="modal-content" style={customContainerStyles}>
        <div className="modal-body" style={customStyles}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
