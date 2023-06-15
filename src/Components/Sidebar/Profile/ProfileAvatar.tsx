import React from "react";
import { Avatar, Button, Typography, Stack } from "@mui/material";

export default function AvatarButton({ handleClickOpen }) {
  return (
    <Button onClick={handleClickOpen}>
      <Stack>
        <Avatar
          sx={{
            width: "70px",
            height: "70px",
            backgroundColor: "primary.dark",
            marginBottom: "1px",
            marginTop: "30px",
            color: "text.primary",
          }}
        >
          C
        </Avatar>
        <Typography variant="h6" color="text.primary">
          Cory
        </Typography>
      </Stack>
    </Button>
  );
}
