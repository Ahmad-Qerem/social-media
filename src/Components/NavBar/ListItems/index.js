import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import styles from "./styles.module.css";
const ListItems = () => {
  const ListTitles = ["Home", "About"];
  const UserRouts = ["Log In", "Sign Up"];
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.Items}>
        {ListTitles.map((item) => (
          <ListItem className={styles.ListItem}>
            <Link>{item}</Link>
          </ListItem>
        ))}
      </div>

      <Search />
    </div>
  );
};

export default ListItems;
