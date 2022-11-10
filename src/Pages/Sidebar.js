import './Sidebar.css'
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import db from '../firebase';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp , Timestamp } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './Chat.css'
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const Sidebar = ( user) => {
    //  short form of 
    const colref = collection(db, "users")

  //  logout function 
    const logout = () =>{
        signOut(auth , user)
    }
    
    //  showing created group 
    const [showG, setshowG] = useState([])
    useEffect(() => {
      const q = query(colref , orderBy('timestamp', 'desc'))
      onSnapshot(q , (sanpshot)=>{
        setshowG(sanpshot.docs.map((doc)=>
(   {  ...doc.data(), id: doc.id}       )
        ));
      })
     console.log(showG);
     console.log("😎😎");
     
    }, [])

    // adding groups 
      const [group, setgroup] = useState('')

    const addgroup = async ()=>{
      const payload = { gname : group, timestamp : serverTimestamp() }
      await addDoc(colref, payload);
      setgroup("");
    }
 
    //  getting groups id
    const [groupsid, setgroupsid] = useState([])



    // deleting groups
      const deleteg = async (id)=>{
        await deleteDoc(doc(db, 'users', id));
      } 
      console.log(groupsid.gname, "hlo");
      
       // sending msg 
  const [newmsg, setnewmsg] = useState([]);
 console.log(newmsg, "mesg");
  const sendmsg = async (e) =>{
    e.preventDefault()
    const userg = groupsid.id;
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

         // showing send msges
      const [smsg, setsmsg] = useState([]);
      const chat_msg=(show) => {
        setgroupsid(show);
        const id = show.id;
        const msgref = collection(db, 'users', id,'chats');
        const q = query(msgref, orderBy('createdAt','asc'))
         onSnapshot(q, (snapshot)=>{
            setsmsg(snapshot.docs.map((doc)=>
            ( { ...doc.data(), id: doc.id  })
            ))
          } )
      }
      
     console.log(smsg, "chats msg");
    //  chat section funtions 👍 👍
    
  const Input = styled('input')({
    display: 'none',
  });
   
  const handleSubmit =(e)=>{
    e.preventDefault();
  }
    // auto scroll
    const bottomofchat = useRef();
    useEffect(() => {
      setTimeout(
      bottomofchat.current.scrollIntoView({
        behaviour : "smooth",
        block : 'start',
      }), 10)
    }, [newmsg])
    
 

  return (
      <>
      <div className="sidebar">
      <div className="header">
      <Avatar src= {auth.currentUser?.photoURL} alt = "tera net slow hai" />
        <h3>{auth.currentUser?.displayName  } </h3>
        <LogoutIcon  onClick = {logout} />
      </div>
      <div className="searchbar">
     <div className="searchbox"> <SearchIcon/>
     <input  value={group} onChange= {e => setgroup(e.target.value)}  type="text" placeholder='create group'/>
     <Button disabled ={!group}  variant="contained" href="#contained-buttons" onClick = {addgroup}>
     Create
   </Button>  </div>
      </div>
       <div className="userchats">
       {
         showG.map((show)=>{
          return (
            <><div className="userchat_box" onClick={()=> {chat_msg(show); setgroupsid(show)}   } >
            <Avatar/>
            <h4 key={show.id} > {show.gname} </h4>
            <IconButton  onClick={()=>deleteg(show.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
            </div>
            
            </>
          )
         })
       }
      
      
       </div>
    {  //  chat section 👍 👍
    }

      </div> 
      { groupsid ?  <div className="user_chatpage">
      
      <div className="chat_header">
      <Avatar/>
      <h3> {groupsid.gname}  </h3>

      </div>
      <div  className="body"  >
      {
        smsg.map((show)=>{
          return(
            <> <div className={show.from===auth.currentUser.email ? "msgright" : "msgleft" }>
            <h2 className ="chatmsg" > 
            <Avatar className = "chatphoto" src = {show?.photo} />
            {show?.newmsg}
            <span className = "chatname" > {show.name} </span>
             </h2>
           </div>
            </>
          )
         }) 
      }
      <div  ref = {bottomofchat}></div>
    
  
      </div>
      <div className="footer">
      <label htmlFor="icon-button-file">
      <Input accept="image/*" id="icon-button-file" type="file" />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera />
      </IconButton>
    </label>
    <div className="input_fieldbox">
    <form
      onSubmit = {handleSubmit}
    sx={{
      '& > :not(style)': { m: 1, width: '97%' },
    }}
    noValidate
    autoComplete="off"
  >
  <TextField fullWidth  value={newmsg} onChange = {(e)=> setnewmsg(e.target.value)}  id="standard-basic" label="type something" variant="standard" /> 
  </form>
    </div>
    <Button  disabled = {!newmsg} onClick={(e)=>sendmsg(e)} variant="contained"> send </Button>
   
    
      </div>
      </div>

          :   <h1 className='selectchat' >jise baat kerni hai ose to select ker le </h1>
          
           
      }
      </>
  );
};

export default Sidebar;
