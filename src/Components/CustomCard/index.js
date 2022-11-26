import React from "react";
import AnswersDiv from "./AnswersDiv";
import { QuestionDiv } from "./QuestionDiv";
import styles from "./styles.module.css";
const CustomCard = () => {
  return (
    <>
      <div className={styles.questionWrapper}>
        <div className={styles.card}>
          <AnswersDiv />
          <QuestionDiv/>
          
        </div>
       
       
      </div>
    </>
  );
};

export default CustomCard;
