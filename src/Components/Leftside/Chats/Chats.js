import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chats.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc } from 'firebase/firestore';
import db, { auth } from '../../../firebase';
import { motion } from 'framer-motion'



const Chats = ({id,groupname,groupid,newgname,photourl}) => {


  const deleted = async()=>{
    await deleteDoc(doc(db,'users',id))
    groupid('');
    newgname('');
  }

    const value = ()=>{
      groupid(id)
      newgname(groupname)
      photourl('')
    }
  

  return (
    <>
    <motion.div initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", duration: 2 }}
     onClick={ value } className="userchat_box">
          <Avatar/>
          <h4 > {groupname} </h4>
          <IconButton sx={{marginLeft:'auto', ":hover":{ color:'red' } }}   aria-label="delete">
          <DeleteIcon  onClick={deleted} />
        </IconButton>
          </motion.div>
    </>
  )
}

export default Chats