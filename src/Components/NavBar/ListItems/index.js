import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import styles from "./styles.module.css";
const ListItems = () => {
  const ListTitles = [
    {
      Title: "Home",
      Link: "/",
    },
    {
      Title: "About",
      Link: "About",
    },
  ];

  const UserRouts = [
    {
      Title: "Log In",
      Link: "/Login",
    },
    {
      Title: "Sign Up",
      Link: "/Signup",
    },
  ];
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.Items}>
        {ListTitles.map((item) => (
          <ListItem className={styles.ListItem}>
            <Link className={styles.LinkTitle} to={item.Link}>
              {item.Title}
            </Link>
          </ListItem>
        ))}
      </div>

      <Search />
      <div className={styles.UserState}>
        {UserRouts.map((item) => (
          <ListItem className={styles.ListItem}>
            <Link to={item.Link} className={styles.LinkTitle}>
              {item.Title}
            </Link>
          </ListItem>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
