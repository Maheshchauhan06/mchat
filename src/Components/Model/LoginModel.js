import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './LoginModel.css'
import { useState } from 'react';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [check, setcheck] = useState(false);

   const change = () =>{
     setcheck(true)
   }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div  >
      <Button variant="outlined" onClick={handleClickOpen}>
        Login 
      </Button>
      <Dialog   open={open} onClose={handleClose}>
         <div className="container">
          
         </div>
      </Dialog>
    </div>
  );
}
