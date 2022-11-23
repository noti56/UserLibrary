import React from "react";
import styles from "./Button.module.scss";
interface props {
  onClick: () => void;
  children: React.ReactNode;
  disable: boolean;
}
const Button = ({ children, disable, onClick }: props) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disable}>
      {children}
    </button>
  );
};

export default Button;
