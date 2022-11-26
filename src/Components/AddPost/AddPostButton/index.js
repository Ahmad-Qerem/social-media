import React from "react";
import styles from "./styles.module.css";
const AddPostButton = ({ handleClickOpen }) => {
  return (
    <div>
      <button onClick={handleClickOpen}>Add a question</button>
    </div>
  );
};

export default AddPostButton;
