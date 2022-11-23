import React, { useState } from "react";
import { IUser } from "../../types/userType";
import styles from "./User.module.scss";
import { ReactComponent as Pencil } from "../../assets/svg/Pencil.svg";
import Modal from "../Modal/Modal";
import UserForm from "../UserForm/UserForm";
import { useAppDispatch } from "../../store/hooks";
import { editUser } from "../../store/slices/userSlice";
import {
  chechIfFieldsAreEmpty,
  checkIfEmailIsValid,
  checkLength,
} from "../../utils/commonValidators";
interface props {
  user: IUser;
}
const User = ({ user }: props) => {
  const [toOpenModal, setToOpenModal] = useState<boolean>(false);
  const [nameEdit, setNameEdit] = useState<string>(user.name);
  const [emailEdit, setEmailEdit] = useState<string>(user.email);
  const [locationEdit, setLocationEdit] = useState<string>(user.location);
  const [isFormValid, setIsFormValid] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <Pencil
          onClick={() => setToOpenModal(true)}
          className={styles.pencil}
          width={20}
          fill={"white"}
        />
        <img className={styles.profilePicture} src={user.userImage} alt="user Image" />
        <li>{user.name}</li>
        <li>{user.location}</li>
        <li>
          <a className={styles.mailLink} href={"mailto:" + user.email}>
            {user.email}{" "}
          </a>
        </li>
      </ul>
      <Modal isOpen={toOpenModal} closeButtonHandler={() => setToOpenModal(false)}>
        <UserForm
          inputValues={[nameEdit, emailEdit, locationEdit]}
          isFormValid={isFormValid}
          setIsFormValid={setIsFormValid}
          validators={[
            () => checkLength(nameEdit, 3),
            () => checkIfEmailIsValid(emailEdit),
            () => chechIfFieldsAreEmpty([nameEdit, emailEdit, locationEdit]),
          ]}
          inputs={[
            { value: nameEdit, onChange: setNameEdit, placeholder: "name" },
            { value: emailEdit, onChange: setEmailEdit, placeholder: "email" },
            { value: locationEdit, onChange: setLocationEdit, placeholder: "location" },
          ]}
          onSubmit={() => {
            dispatch(
              editUser({
                email: emailEdit,
                id: user.id,
                location: locationEdit,
                name: nameEdit,
                userImage: user.userImage,
              })
            );
            setToOpenModal(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default User;
