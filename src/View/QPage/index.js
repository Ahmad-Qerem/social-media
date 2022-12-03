import React from "react";
import AddPost from "../../Components/AddPost";
import styles from "./styles.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const QPage = () => {
  const handel = () => {
    console.log("test");
  };
  return (
    <div className={styles.QuestionPageWrapper}>
      <div className={styles.numberDiv}>
        <MdKeyboardArrowUp onClick={handel} className={styles.ArrowButton} />
        <h1 className={styles.Number}>78787</h1>
        <MdOutlineKeyboardArrowDown
          onClick={handel}
          className={styles.ArrowButton}
        />
      </div>

      <div className={styles.details}>
        <h1 className={styles.Question}>
          Why is processing a sorted array faster than processing an unsorted
          array?
        </h1>
        <p>
          Here is a piece of C++ code that shows some very peculiar behavior.
          For some reason, sorting the data (before the timed region)
          miraculously makes the primary loop almost six times faster:
        </p>
      </div>
    </div>
  );
};

export default QPage;
