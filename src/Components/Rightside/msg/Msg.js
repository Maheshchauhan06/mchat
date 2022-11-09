import { Avatar } from '@mui/material'
import React from 'react'
import './Msg.css'

const Msg = () => {
  return (
    <>
    <div className= "msg" >
    <Avatar />
    <h2 className ="chatmsg" > 
      bro
    <p className = "chatname" > goku </p>
     </h2>
   </div>
    </>
  )
}

export default Msg