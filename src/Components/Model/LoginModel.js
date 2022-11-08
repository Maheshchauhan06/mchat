import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import './LoginModel.css'
import { useState } from 'react';
import Signup from './Signup';
import { Box } from '@mui/system';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div  >
       {/* Button to open Dialog */}
      <Button sx={{color:'snow', ":hover":{color:'blue', background:'snow'} , border:'1px solid snow' }} variant="outlined" onClick={handleClickOpen}>
       Login 
      </Button>
      <Dialog  className='dialog' open={open} onClose={handleClose}>
         <div className="container">
         
       <Signup/> 

         </div>
      </Dialog>
    </div>
  );
}
