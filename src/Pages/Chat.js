import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './Chat.css'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { addDoc, collection, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore';
import db, { auth } from '../firebase';

const Chat = ({name , groupid}) => {
  const Input = styled('input')({
    display: 'none',
  });

  // sending msg 
  const [msg, setmsg] = useState([]);

  const sendmsg = async () =>{
    const user = auth.currentUser.uid;
    const userg = groupid;
   const payload2 = {
    msg,
    createdAt : Timestamp.fromDate(new Date()),
  }
    await addDoc(collection(db, 'users', userg, 'chats'),payload2);
    setmsg("");
  }
   
 
  
    

  

  return (
      <> <div className="user_chatpage">
      
      <div className="chat_header">
      <Avatar/>
      <h3> {name}  </h3>

      </div>
      <div  className="body">
      <div className="msgleft">
            <h2> hlo {msg.msg} <p className='time' >4:30am</p></h2>
           </div> <div className="msgright">
           <h2> hi {msg.msg} <p className='time' >4:30am</p></h2>
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
  <TextField value={msg} onChange = {(e)=> setmsg(e.target.value)}  id="standard-basic" label="type something" variant="standard" /> 
  </Box>
    </div>
    <Button onClick={sendmsg} variant="contained"> send </Button>
   
    
      </div>
      </div>
      
     
      </>
  );
};

export default Chat;
