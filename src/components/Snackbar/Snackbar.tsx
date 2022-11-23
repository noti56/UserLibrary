import React, { CSSProperties, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { hideSnackbar } from "../../store/slices/snackbarSlice";

import styles from "./Snackbar.module.scss";

const Snackbar = () => {
  const snackbarState = useAppSelector((state) => state.snackbar);

  const dispatch = useAppDispatch();

  let timeout: any;

  const handleTimeout = () => {
    timeout = setTimeout(() => {
      dispatch(hideSnackbar());
    }, 3500);
  };

  useEffect(() => {
    if (snackbarState.toShow) {
      handleTimeout();
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [snackbarState.toShow]);

  const getSnackbarTypeColor = (): CSSProperties => {
    switch (snackbarState.type) {
      case "error":
        return { backgroundColor: "#c0392b", color: "whitesmoke" };

      case "success":
        return {};

      default:
        return {};
    }
  };

  return (
    <>
      {snackbarState && snackbarState.toShow && snackbarState.msg && (
        <div
          className={styles["container"] + " animate__animated animate__lightSpeedInLeft"}
          style={getSnackbarTypeColor()}
        >
          <b>{snackbarState.msg}</b>
        </div>
      )}
    </>
  );
};

export default Snackbar;
