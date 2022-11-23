import React, { CSSProperties, FC } from "react";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop/Backdrop";

import styles from "./Modal.module.scss";
import { useAppSelector } from "../../store/hooks";
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  closeButtonHandler: Function;
  closeIconFromProps?: any;
  modalstyling?: CSSProperties;
}

const Modal = ({
  children,
  isOpen,
  closeButtonHandler,
  modalstyling,
  closeIconFromProps,
}: Props) => {
  const backdropRootFromDom = document.getElementById("backdrop");
  const modalRootFromDom = document.getElementById("modal");

  if (!backdropRootFromDom || !modalRootFromDom || !isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(<Backdrop />, backdropRootFromDom)}
      {createPortal(
        <div className={styles.modal} style={modalstyling && modalstyling}>
          <div
            className={styles.iconWrapper}
            onClick={() => {
              closeButtonHandler();
            }}
          >
            <CloseIcon />
          </div>
          <div className={styles.childrenWrapper}>{children}</div>
        </div>,
        modalRootFromDom
      )}
    </>
  );
};

export default Modal;
