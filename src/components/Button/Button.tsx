import React, { CSSProperties } from "react";
import styles from "./Button.module.scss";
interface props {
  onClick: () => void;
  children: React.ReactNode;
  disable: boolean;
  customStyles?: CSSProperties;
}
const Button = ({ children, disable, onClick, customStyles }: props) => {
  return (
    <button
      style={customStyles ? customStyles : {}}
      className={styles.button}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
