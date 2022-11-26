import React from "react";
import AddPost from "../../Components/AddPost";
import CustomCard from "../../Components/CustomCard";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.MainWrapper}>
      <AddPost />
      <CustomCard />
    </div>
  );
};

export default HomePage;
