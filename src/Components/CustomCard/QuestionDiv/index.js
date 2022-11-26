import React from "react";
import QuestionTag from "./QuestionTag";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const QuestionDiv = () => {
  return (
    <div className={styles.questionDiv}>
      <h1 className={styles.question}>
        <Link className={styles.question} to ="/QPage">Why is processing a sorted array faster than processing an unsorted
        array?</Link>
        
      </h1>
      <p className={styles.questionDes}>
        Here is a piece of C++ code that shows some very peculiar behavior. For
        some reason, sorting the data (before the timed region) miraculously
        makes the primary loop almost{" "}
      </p>
      <QuestionTag/>
    </div>
  );
};
