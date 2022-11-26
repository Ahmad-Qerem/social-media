import React from "react";
import AddPostButton from "./AddPostButton";
import AddPostPopUp from "./AddPostPopUp";

function AddPost() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AddPostButton handleClickOpen={handleClickOpen} />
      <AddPostPopUp
        handleClickOpen={handleClickOpen}
        handleClickClose={handleClickClose}
        open={open}
      />
    </div>
  );
}

export default AddPost;
