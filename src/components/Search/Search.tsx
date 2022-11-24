import React, { Dispatch, SetStateAction } from "react";
import Input from "../../Input/Input";

interface props {
  onChangeHandler: Function;
  inputValue: any;

  propertiesToCheckOn: Array<string | number>;
  setArray: Dispatch<SetStateAction<Array<any>>>; // setState from outside
  originalArray: Array<any>;
}

const Search = ({
  onChangeHandler,
  inputValue,
  setArray,
  propertiesToCheckOn,
  originalArray,
}: props) => {
  return (
    <Input
      onChange={(textFromInput: string) => {
        onChangeHandler(textFromInput);
        if (textFromInput.length == 0 && originalArray) {
          setArray(originalArray);
          return;
        }
        const arr: Array<any> = [];
        originalArray.forEach((objectToCheck) => {
          let alreadyInsideArray: boolean = false;
          propertiesToCheckOn.forEach((property) => {
            if (
              !alreadyInsideArray &&
              objectToCheck[property]
                ?.toString()
                ?.toLowerCase()
                ?.includes(textFromInput?.toLowerCase())
            ) {
              arr.push(objectToCheck);
              alreadyInsideArray = true;
            }
          });
        });
        setArray(arr);
      }}
      inputType="text"
      value={inputValue}
      placeholder={"search"}
    />
  );
};

export default Search;
