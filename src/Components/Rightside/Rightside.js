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
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore';
import { useRef } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { async } from '@firebase/util';



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

     const deleted =(id)=>{
      setsmsg(smsg.filter((dele)=> dele.id!=id ))
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
     createdAt : Timestamp.fromDate(new Date()),
   }
     await addDoc(collection(db, 'users', userg, 'chats'),payload2);
     setnewmsg("");
   }

   


  return (
    <> 
    <div className="user_chatpage">
      
    <div className="chat_header">
    <Avatar/>
    <h3>  {groupid ? newgname : "Selcet a chat for text" } </h3>

    </div>
    <div  className="body"  > 
    { groupid ? smsg.map((show)=>{ 
      return( <>
    <div className= {show.from===auth.currentUser.email ? "msg-left msg" : "msg-right msg"} >
        <h2 className ={show.from===auth.currentUser.email ? "chatleft-msg" : "chatright-msg"} > 
        <IconButton onClick={()=>deleted(show.id)}  aria-label="delete">
        <DeleteIcon  />
      </IconButton>
        <Avatar src={show?.photo} className = {show.from===auth.currentUser.email ? "chatleft-photo" : "chatright-photo"}/>
 {show?.newmsg} 
        <p className = {show.from===auth.currentUser.email ? "chatleft-name" : "chatright-name"} >{show?.name} </p>
          </h2>
        </div>
      
  <div ></div> </> )}) : <h1>selcet group to chat</h1> } 
    <div ref={scrollmsg} ></div>
    </div>
    <form onSubmit={(e)=>sendmsg(e)} className="footer">
    <label htmlFor="icon-button-file">
    <Input disabled={!groupid} sx={{width:'0px'}} accept="image/*" id="icon-button-file" type="file" />
    <IconButton disabled={!groupid}   color="primary" aria-label="upload picture" component="span">
      <PhotoCamera />
    </IconButton>
  </label>
  <div className="input_fieldbox">
 
<TextField fullWidth disabled={!groupid}  value={newmsg} onChange = {(e)=> setnewmsg(e.target.value)}   id="standard-basic" label="type something" variant="standard" /> 
  </div>
  <Button disabled = {!newmsg || !groupid } type="submit" variant="contained"> send </Button>
 
  
    </form>
    </div>
    </>
  )
}

export default Rightside