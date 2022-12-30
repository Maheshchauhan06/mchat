import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chats.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc } from 'firebase/firestore';
import db, { auth } from '../../../firebase';
import { motion } from 'framer-motion'
import { useContext } from 'react';
import { lastmsg } from '../../../Pages/Chatpage';



const Chats = ({id,groupname,groupid,newgname}) => {

  const { latestmsg} = useContext(lastmsg);
 
  let newmsg = "";

   if(latestmsg?.length > 4){
      newmsg = latestmsg[0]+latestmsg[1]+latestmsg[2]+latestmsg[3]+"..."
   }


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
    <motion.div initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", duration: 2 }}
     onClick={ value } className="userchat_box">
          <Avatar/> <div>
          <h4 > {groupname} </h4>
          <p> {newmsg} </p> </div>
          <IconButton sx={{marginLeft:'auto' ,color:"black"  ,  ":hover":{ color:'white', backgroundColor:'black' } }}   aria-label="delete">
          <DeleteIcon  onClick={deleted} />
        </IconButton>
          </motion.div>
    </>
  )
}

export default Chats