import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chats.css'
import DeleteIcon from '@mui/icons-material/Delete';


const Chats = () => {
  return (
    <>
    <div className="userchats">
    <div className="userchat_box">
          <Avatar/>
          <h4 > goku </h4>
          <IconButton   aria-label="delete">
          <DeleteIcon />
        </IconButton>
          </div>
     </div>
    </>
  )
}

export default Chats