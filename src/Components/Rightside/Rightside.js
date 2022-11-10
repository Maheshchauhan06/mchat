import React from 'react'
import './Rightside.css'
import { Avatar, Input } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

const Rightside = ({groupid}) => {

  
  

  return (
    <>
    <div className="user_chatpage">
      
    <div className="chat_header">
    <Avatar/>
    <h3> hlo </h3>

    </div>
    <div  className="body"  >
     <div className= "msg-right" >
          <h2 className ="chatright-msg" > 
          <Avatar className = "chatright-photo" />
            hlo
          <p className = "chatright-name" > goku </p>
           </h2>
         </div>
     <div className= "msg-left" >
          <h2 className ="chatleft-msg" > 
          <Avatar className = "chatleft-photo" />
            hlo
          <p className = "chatleft-name" > goku </p>
           </h2>
         </div>
        
    <div ></div>
    </div>
    <div className="footer">
    <label htmlFor="icon-button-file">
    <Input sx={{width:'0px'}} accept="image/*" id="icon-button-file" type="file" />
    <IconButton color="primary" aria-label="upload picture" component="span">
      <PhotoCamera />
    </IconButton>
  </label>
  <div className="input_fieldbox">
 
<TextField fullWidth  id="standard-basic" label="type something" variant="standard" /> 
  </div>
  <Button  variant="contained"> send </Button>
 
  
    </div>
    </div>

    </>
  )
}

export default Rightside