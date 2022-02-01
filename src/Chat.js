import { Avatar } from '@mui/material';
import React from 'react';
import './Chat.css'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const Chat = () => {
  const Input = styled('input')({
    display: 'none',
  });
  return (
      <> <div className="user_chatpage">
      <div className="chat_header">
      <Avatar/>
      <h3> mahesh chauhan</h3>

      </div>
      <div className="body">
      <div className="msgleft">
       <h2>hlo <p className='time' >4:30am</p></h2>
      </div>
      <div className="msgright">
       <h2>hlo <p className='time' >4:30am</p></h2>
      </div>
      </div>
      <div className="footer">
      <label htmlFor="icon-button-file">
      <Input accept="image/*" id="icon-button-file" type="file" />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera />
      </IconButton>
    </label>
    <div className="input_fieldbox">
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '97%' },
    }}
    noValidate
    autoComplete="off"
  >
  <TextField id="standard-basic" label="Standard" variant="standard" /> 
  </Box>
    </div>
    <Button variant="contained">Contained</Button>
   
    
      </div>
      </div>
      
     
      </>
  );
};

export default Chat;
