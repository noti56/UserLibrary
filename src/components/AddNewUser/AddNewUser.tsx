import React, { useState } from "react";
import { toBase64 } from "../../services/fileToBase64";
import { useAppDispatch } from "../../store/hooks";
import { addUser } from "../../store/slices/userSlice";
import {
  chechIfFieldsAreEmpty,
  checkIfEmailIsValid,
  checkLength,
} from "../../utils/commonValidators";

import { v4 as uuidv4 } from "uuid";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import UserForm from "../UserForm/UserForm";

const AddNewUser = () => {
  const [toShowModal, setToShowModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const setImageFromFile = async (file: Blob[]) => {
    if (!file) return;
    const base64 = await toBase64(file[0]);
    if (typeof base64 == "string") {
      setImage(base64);
    }
  };

  const saveUser = () => {
    dispatch(addUser({ email, name, location, userImage: image, id: uuidv4() }));
    setToShowModal(false);
  };

  return (
    <>
      <Button
        disable={false}
        onClick={() => {
          setToShowModal(true);
        }}
      >
        <span>add new User</span>
      </Button>
      <Modal isOpen={toShowModal} closeButtonHandler={() => setToShowModal(false)}>
        <UserForm
          inputValues={[name, email, location, image]}
          isFormValid={isFormValid}
          inputs={[
            { value: name, onChange: setName, placeholder: "name" },
            { value: email, onChange: setEmail, placeholder: "email" },
            { value: location, onChange: setLocation, placeholder: "location" },
            { value: image, onChange: setImageFromFile, placeholder: "Image", inputType: "file" },
          ]}
          validators={[
            () => checkLength(name, 3),
            () => checkIfEmailIsValid(email),
            () => chechIfFieldsAreEmpty([name, email, location, image]),
          ]}
          onSubmit={saveUser}
          setIsFormValid={setIsFormValid}
        />
      </Modal>
    </>
  );
};

export default AddNewUser;
