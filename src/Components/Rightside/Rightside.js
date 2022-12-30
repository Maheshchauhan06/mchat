import React, { useEffect } from 'react'
import './Rightside.css'
import { Avatar, Input } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { auth, storage } from '../../firebase';
import db from '../../firebase';
import { addDoc, collection ,onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore';
import { useRef } from 'react';
import {motion} from 'framer-motion'
import { lastmsg } from '../../Pages/Chatpage';
import { useContext } from 'react';


const Rightside = ({groupid , newgname}) => {


    const [gname, setgname] = useState([])
   

    useEffect(() => {
        chat_msg(groupid)
    }, [groupid])
    


     // showing send msges
     const [smsg, setsmsg] = useState([]);
     const chat_msg= async (groupid) => {
    await   setgname(groupid);
       const id = groupid;
       const msgref = await collection(db, 'users', id,'chats');
       const q = query(msgref, orderBy('createdAt','asc'))
        onSnapshot (q, async (snapshot)=>{
          await setsmsg(snapshot.docs.map((doc)=>
           ( { ...doc.data(), id: doc.id  })
           ))
         } )
     }
    


   const scrollmsg = useRef(null);

     useEffect(() => {
     scrollmsg.current?.scrollIntoView({ behavior:'smooth' });
     }, [smsg])
     

       // sending msg 
  const [newmsg, setnewmsg] = useState([]);
  console.log(newmsg, "mesg");
   const sendmsg = async (e) =>{
     e.preventDefault()
     const userg = groupid;
    const payload2 = {
      photo :  auth.currentUser.photoURL,
      name : auth.currentUser.displayName,
      from : auth.currentUser.email,
     newmsg,
     lastmsg : newmsg,
     createdAt : Timestamp.fromDate(new Date()),
   }
     await addDoc(collection(db, 'users', userg, 'chats'),payload2);
     setnewmsg("");
   }


    const { setlatestmsg } = useContext(lastmsg);



  return (
    <> 
    <div className="user_chatpage">
      
    <motion.div  initial={{Opacity:0, x:50 }}
      animate={{opacity:1, x:0 }}
      transition={{ type:'spring', duration: 2 }}

    className="chat_header">
    <Avatar/>
    <h3>  {groupid ? newgname : "Selcet a chat for text" } </h3>

    </motion.div>
    <div  className="body"  > 
    { groupid ? smsg.map((show)=>{ 
      return( <> { setlatestmsg(show.lastmsg) }
      
          <motion.div  initial={{Opacity:0, y:50 }}
          animate={{opacity:1, y:0 }}
          transition={{ type:'spring', duration: 2 }}
           className={show.from!==auth.currentUser.email? 'msg' : 'owner'} >
          <div className="msginfo">
             <Avatar src={show?.photo}  />
             <span> just now </span>
          </div>
          <div className="msgcontent">
          <p>{ show?.newmsg }</p>
          </div>
          </motion.div>
      
  <div ></div> </> )}) : <motion.h1 initial={{Opacity:0, x:50 }}
  animate={{opacity:1, x:0 }}
  transition={{ type:'spring', duration: 2 }}
  style={{color:'white' }}
  >Select group to chat</motion.h1> } 
    <div ref={scrollmsg} ></div>
    </div>
    <form onSubmit={(e)=>sendmsg(e)} className="footer">
  <div className="input_fieldbox">
 
<TextField fullWidth disabled={!groupid}  value={newmsg} onChange = {(e)=> setnewmsg(e.target.value)}   id="standard-basic" label="Start msging" variant="standard" /> 
  </div>
  <Button disabled = {!newmsg || !groupid } type="submit" variant="contained"> send </Button>
 
  
    </form>
    </div>
    </>
  )
}

export default Rightside