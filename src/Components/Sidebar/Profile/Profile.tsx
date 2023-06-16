import { useState } from "react";
import { Box } from "@mui/material";
import AvatarButton from "./ProfileAvatar";
import ProfileDialog from "./ProfileDialog";

export default function Profile() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <AvatarButton handleClickOpen={handleClickOpen} />
      <ProfileDialog open={open} handleClose={handleClose} />
    </Box>
  );
}
