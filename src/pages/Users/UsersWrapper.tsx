import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import User from "../../components/User/User";
import { useAppSelector } from "../../store/hooks";
import { IUser } from "../../types/userType";
import styles from "./UsersWrapper.module.scss";
const UsersWrapper = () => {
  const users = useAppSelector((state) => state.user);
  const [userSearchCopy, setUserSearchCopy] = useState<IUser[]>([]);
  const [searchInputVal, setSearchInputVal] = useState<string>("");

  useEffect(() => {
    setUserSearchCopy(users);

    return () => {};
  }, [JSON.stringify(users)]);

  if (users.length == 0) return null;
  return (
    <div className={styles.usersWrapper}>
      <span className={styles.inputContainer}>
        <Search
          inputValue={searchInputVal}
          onChangeHandler={setSearchInputVal}
          originalArray={users}
          propertiesToCheckOn={["id", "email", "name", "userImage", "location"]}
          setArray={setUserSearchCopy}
        />
      </span>
      {userSearchCopy.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersWrapper;
