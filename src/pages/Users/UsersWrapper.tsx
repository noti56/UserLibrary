import React from "react";
import User from "../../components/User/User";
import { useAppSelector } from "../../store/hooks";
import styles from "./UsersWrapper.module.scss";
const UsersWrapper = () => {
  const users = useAppSelector((state) => state.user);
  if (users.length == 0) return null;
  return (
    <div className={styles.usersWrapper}>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersWrapper;
