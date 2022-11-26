import React from "react";
import AddPost from "../../Components/AddPost";
import styles from "./styles.module.css";

const QPage = () => {
  return (
    <div className={styles.MainWrapper}>
      <AddPost />
    </div>
  );
};

export default QPage;
