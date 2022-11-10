import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Leftside.css'
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import db, { auth } from '../../../firebase';
import Button from '@mui/material/Button';
import Chats from '../Chats/Chats';
import { signOut } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';


const Leftside = ({user, groupid, newgname}) => {

  // to logout 
   const logout = () =>{
     signOut(auth,user)
   }

   // short form
   const colref = collection(db, "users")

   // creating groups
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

    const addgroup = async (e)=>{
      e.preventDefault();
      const payload = { gname : group, timestamp : serverTimestamp() }
      await addDoc(colref, payload);
      setgroup("");
      console.log(newgname);
    }

    


  return (
    <> <div className="left-box">
    <div className="sidebar">
    <div className="header">
    <Avatar src= {auth.currentUser?.photoURL} alt = "tera net slow hai" />
      <h3>{auth.currentUser?.displayName  } </h3>
      <LogoutIcon onClick={logout} />
    </div>
    <div className="searchbar">
   <form onSubmit={addgroup}  className="searchbox"> 
   <SearchIcon/>
   <input value={group} onChange= {e => setgroup(e.target.value)}  type="text" placeholder='create group'/>
   <Button disabled ={!group} type='submit' variant="contained" href="#contained-buttons" >
   Create
 </Button>  </form>
    </div> <div className="userchats">
    { showG.map((show)=>{
           return(
     <Chats id={show.id} groupname= {show.gname} groupid={groupid} newgname={newgname} />
           )
    })

    }</div>
    </div> 
    </div>
    </>
  )
}

export default Leftside