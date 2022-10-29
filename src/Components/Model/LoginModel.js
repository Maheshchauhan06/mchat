import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import './LoginModel.css'
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
      <Button sx={{color:'snow', border:'1px solid snow' }} variant="outlined" onClick={handleClickOpen}>
       Login 
      </Button>
      <Dialog   open={open} onClose={handleClose}>
         <div className="container">

         {/* sign up slider */}
         <Box sx={{ width: '100%',
         }}>
        
    </Box>
       <Signup/> 

         </div>
      </Dialog>
    </div>
  );
}
