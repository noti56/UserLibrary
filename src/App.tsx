import React, { Suspense, useEffect } from "react";
import Modal from "./components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchAllUsers } from "./store/slices/userSlice";
import styles from "./App.module.scss";
import { Audio } from "react-loader-spinner";
import UsersWrapper from "./pages/Users/UsersWrapper";
import Button from "./components/Button/Button";
import AddNewUser from "./components/AddNewUser/AddNewUser";
const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <Suspense
      fallback={
        <div className={styles.spinnerCotainer}>
          <Audio height="80" width="80" color="green" ariaLabel="loading" />
        </div>
      }
    >
      <div className={styles.container}>
        <div className={styles.addUserContainer}>
          <AddNewUser />
        </div>
        <UsersWrapper />
      </div>
    </Suspense>
  );
};

export default App;
