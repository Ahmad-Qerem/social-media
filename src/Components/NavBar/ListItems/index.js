import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
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
      <div className={styles.UserState}>
        <CustomButton Text={UserRouts[0]} variant={"contained"} />
        <CustomButton Text={UserRouts[1]} variant={"outlined"} />
      </div>
    </div>
  );
};

export default ListItems;
