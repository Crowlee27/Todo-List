// import { Avatar, Box, Typography, Stack } from "@mui/material";

// export default function Profile() {
//   return (
//     <Box
//       display="flex"
//       justifyContent="flex-start"
//       alignItems="center"
//     >
//       <Stack direction="column" alignItems="center" >
//         <Avatar
//           sx={{
//             width: "70px",
//             height: "70px",
//             backgroundColor: "primary.dark",
//             marginBottom: "1px",
//             marginTop: "30px",
//           }}
//         >
//           <Typography variant="h6" color="text.primary">
//             C
//           </Typography>
//         </Avatar>

//         <Typography variant="h6" color="text.primary">
//           Cory
//         </Typography>
//       </Stack>
//     </Box>
//   );
// }

// import React, { useState } from "react";
// import {
//   Avatar,
//   Box,
//   Typography,
//   Stack,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from "@mui/material";

// export default function Profile() {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box display="flex" justifyContent="flex-start" alignItems="center">
//         <Stack direction="column" alignItems="center">
//       <Button onClick={handleClickOpen}>
//         <Avatar
//           sx={{
//             width: "70px",
//             height: "70px",
//             backgroundColor: "primary.dark",
//             marginBottom: "1px",
//             marginTop: "30px",
//           }}
//         >
//           <Typography variant="h6" color="text.primary">
//             C
//           </Typography>
//         </Avatar>
//       </Button>
//       <Typography variant="h6" color="text.primary">
//         Cory
//       </Typography>
//       </Stack>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Avatar Dialog</DialogTitle>
//         <DialogContent>
//           <Typography variant="body1">
//             This is a dialog box opened from the Avatar button!
//           </Typography>
//           {/* Additional content and input fields can be added here */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }

import React, { useState } from 'react';
import { Box } from "@mui/material";
import AvatarButton from './ProfileAvatar';
import ProfileDialog from './ProfileDialog';

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
