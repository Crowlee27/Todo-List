import React from 'react';
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography,Button, TextField } from "@mui/material";
import TaskForm from '../TaskForm/TaskForm';
import TaskDescription from '../TaskForm/TaskDescription';
import {DialogProps} from '@mui/material/Dialog';



export default function ProfileDialog({ open, handleClose }) {
    const [fullWidth] = useState(true);
    const [maxWidth] = useState<DialogProps['maxWidth']>('lg');
  
    return (
    <Dialog open={open} onClose={handleClose} fullWidth={fullWidth} maxWidth={maxWidth} >
      <DialogTitle>New Task</DialogTitle>
      <DialogContent>
      <TaskForm/>
      {/* <TaskDescription/> */}
       
        {/* Additional content and input fields can be added here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
