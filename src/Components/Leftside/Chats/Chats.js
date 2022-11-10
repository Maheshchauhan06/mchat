import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chats.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc } from 'firebase/firestore';
import db from '../../../firebase';


const Chats = ({id,groupname,groupid}) => {


  const deleted = async()=>{
    await deleteDoc(doc(db,'users',id))
    groupid('');
    console.log(groupid);
  }
  

  return (
    <>
    <div onClick={ groupid(id) } className="userchat_box">
          <Avatar/>
          <h4 > {groupname} </h4>
          <IconButton   aria-label="delete">
          <DeleteIcon  onClick={deleted} />
        </IconButton>
          </div>
    </>
  )
}

export default Chats