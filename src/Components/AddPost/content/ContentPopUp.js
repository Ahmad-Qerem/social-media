import React from "react";
import styles from "./Content.module.css";

function ContentPopUp({ handleClickClose }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handlePost = () => {
    if (title !== "") handleClickClose();
  };

  return (
    <div className={styles.content}>
      <label for="title">Title</label>
      <textarea
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="button" onClick={handlePost}>
        Post Question
      </button>
      {/* <Bottun name={"Post Question"} onClick={handlePost} /> */}
    </div>
  );
}

export default ContentPopUp;
