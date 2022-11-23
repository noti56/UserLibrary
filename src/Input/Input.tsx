import React, { HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.scss";
export interface inputProps {
  onChange: (text: any) => void;
  value: string;
  placeholder: string;
  inputType?: "text" | "file";
}
const Input = ({ onChange, value, placeholder, inputType }: inputProps) => {
  return (
    <input
      className={styles.input}
      type={inputType ? inputType : "text"}
      value={inputType == "file" ? undefined: value }
      placeholder={placeholder}
      onChange={(event) =>
        inputType == "file" ? onChange(event.target.files) : onChange(event.target.value)
      }
    />
  );
};

export default Input;
