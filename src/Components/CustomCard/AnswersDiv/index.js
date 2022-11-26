import React from "react";
import styles from "./styles.module.css";

const AnswersDiv = () => {
  return (
    <div className={styles.answersDiv}>
      <h1 className={styles.votes}># Votes</h1>
      <div className={styles.numAnswer}><h1 className={styles.answer}># answers</h1></div>
     
    </div>
  );
};

export default AnswersDiv;
