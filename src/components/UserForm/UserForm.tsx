import React from "react";
import Input, { inputProps } from "../../Input/Input";
import { IUser } from "../../types/userType";
import Button from "../Button/Button";
import Form from "../Form";
import styles from "./UserForm.module.scss";

interface props {
  validators: Array<() => boolean>;
  setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  isFormValid: boolean;
  inputValues: any[];
  inputs: inputProps[];
  onSubmit: () => void;
}

const UserForm = ({
  validators,
  setIsFormValid,
  inputValues,
  isFormValid,
  inputs,
  onSubmit,
}: props) => {
  return (
    <Form inputValues={inputValues} setIsFormValid={setIsFormValid} validators={validators}>
      <div className={styles.formContainer}>
        {inputs.map((input, i) => (
          <Input
            key={i}
            onChange={input.onChange}
            value={input.value}
            placeholder={input.placeholder}
            inputType={input.inputType}
          />
        ))}
        <Button disable={!isFormValid} onClick={onSubmit} customStyles={{backgroundColor:"#2ecc71",fontSize:"larger",color:"white"}}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default UserForm;
