import { Input, TextField } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

const Search = () => {
  return (
    <>
      <div className={styles.MainWrapper}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          className={styles.Search}
        />
      </div>
      <img src="./images/Search.png" className={styles.SearchIcon} />
    </>
  );
};

export default Search;
