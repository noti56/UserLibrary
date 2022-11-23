import { SetState } from "immer/dist/internal";
import React, { Dispatch, useEffect } from "react";
interface props {
  children: React.ReactNode;
  inputValues: any[];
  validators: Array<() => boolean>;
  setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>;
}
const Form = ({ children, inputValues, validators, setIsFormValid }: props) => {
  useEffect(() => {
    let isValid: boolean = true;
    validators.forEach((validator) => {
      if (typeof validator == "function") {
        const isValidi = validator();
        if (!isValidi) {
          isValid = false;
        }
      }
    });

    setIsFormValid(isValid);
    return () => {};
  }, [JSON.stringify(inputValues)]);

  return <>{children}</>;
};

export default Form;
