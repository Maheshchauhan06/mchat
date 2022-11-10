import React, { useEffect } from 'react'
import './Rightside.css'
import { Avatar, Input } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { auth } from '../../firebase';
import db from '../../firebase';
import { addDoc, collection, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore';


const Rightside = ({groupid, getgroup}) => {


    const [gname, setgname] = useState([])


    useEffect(() => {
        chat_msg(groupid)
    }, [groupid])
    

     // showing send msges
     const [smsg, setsmsg] = useState([]);
     const chat_msg= async (groupid) => {
     await   setgname(groupid);
       const id = groupid;
       const msgref = collection(db, 'users', id,'chats');
       const q = query(msgref, orderBy('createdAt','asc'))
        onSnapshot (q, async (snapshot)=>{
          await setsmsg(snapshot.docs.map((doc)=>
           ( { ...doc.data(), id: doc.id  })
           ))
         } )
     }
      console.log(gname);

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
     createdAt : Timestamp.fromDate(new Date()),
   }
     await addDoc(collection(db, 'users', userg, 'chats'),payload2);
     setnewmsg("");
   }
  

  return (
    <> { groupid ? 
    <div className="user_chatpage">
      
    <div className="chat_header">
    <Avatar/>
    <h3> {groupid} </h3>

    </div>
    <div  className="body"  >
    { smsg.map((show)=>{ 
      return( <>
    <div className= {show.from===auth.currentUser.email ? "msg-right" : "msg-left"} >
        <h2 className ="chatright-msg" > 
        <Avatar src={show?.photo} className = "chatright-photo" />
        {show?.newmsg}
        <p className = "chatright-name" > {console.log(show?.name)} {show?.name} </p>
          </h2>
        </div>
      
  <div ></div> </> )})}
    </div>
    <div className="footer">
    <label htmlFor="icon-button-file">
    <Input sx={{width:'0px'}} accept="image/*" id="icon-button-file" type="file" />
    <IconButton color="primary" aria-label="upload picture" component="span">
      <PhotoCamera />
    </IconButton>
  </label>
  <div className="input_fieldbox">
 
<TextField fullWidth  value={newmsg} onChange = {(e)=> setnewmsg(e.target.value)}   id="standard-basic" label="type something" variant="standard" /> 
  </div>
  <Button disabled = {!newmsg} onClick={(e)=>sendmsg(e)}  variant="contained"> send </Button>
 
  
    </div>
    </div>
  : <h2>slect ker le pehele</h2> }
    </>
  )
}

export default Rightside