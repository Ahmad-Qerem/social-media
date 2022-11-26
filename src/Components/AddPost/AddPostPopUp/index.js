import React from "react";
import styles from "./styles.module.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ContentPopUp from "../content/ContentPopUp";

export const Custom = ({ handleClickClose }) => {
  return (
    <DialogTitle>
      Post a Question
      <IconButton
        aria-label="close"
        onClick={handleClickClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

function MaxWidthDialog({ handleClickClose, handleClickOpen, open }) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth={false}
        maxWidth={"lg"}
        open={open}
        onClose={handleClickClose}
      >
        <Custom name="Name" handleClickClose={handleClickClose} />

        <DialogContent>
          <ContentPopUp handleClickClose={handleClickClose} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const AddPostPopUp = ({ handleClickClose, handleClickOpen, open }) => {
  return (
    <div>
      <MaxWidthDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClickClose={handleClickClose}
      />
    </div>
  );
};

export default AddPostPopUp;
