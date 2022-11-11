import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chats.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc } from 'firebase/firestore';
import db, { auth } from '../../../firebase';


const Chats = ({id,groupname,groupid,newgname}) => {


  const deleted = async()=>{
    await deleteDoc(doc(db,'users',id))
    groupid('');
    newgname('');
  }

    const value = ()=>{
      groupid(id)
      newgname(groupname)
    }
  

  return (
    <>
    <div onClick={ value } className="userchat_box">
          <Avatar/>
          <h4 > {groupname} </h4>
          <IconButton sx={{marginLeft:'auto', ":hover":{ color:'red' } }}   aria-label="delete">
          <DeleteIcon  onClick={deleted} />
        </IconButton>
          </div>
    </>
  )
}

export default Chats