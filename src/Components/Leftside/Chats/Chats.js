import { Avatar, IconButton } from '@mui/material'
import  { useState } from 'react'
import './Chats.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc } from 'firebase/firestore';
import db, { auth } from '../../../firebase';


const Chats = ( {groupid,id, groupname} ) => {


  // deleting groups
  const deleteg = async ()=>{
   await deleteDoc(doc(db,'users',id))
    console.log(id,groupname);
  } 

  return (
    <>
    <div  onClick={()=>groupid(id)} className="userchat_box">
          <Avatar/>
          <h4 > {groupname} </h4>
          <IconButton   aria-label="delete">
          <DeleteIcon onClick={deleteg} />
        </IconButton>
          </div>
    </>
  )
}

export default Chats