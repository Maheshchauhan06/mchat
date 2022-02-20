import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './Sidebar.css'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import db from './firebase';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useEffect } from 'react';

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
        console.log(showG.gname);
      })
    
     
    }, [])

    // adding groups 
      const [group, setgroup] = useState([])

    const addgroup = async ()=>{
      const payload = { gname : group, timestamp : serverTimestamp() }
      await addDoc(colref, payload);
      setgroup("");
    }
    // deleting groups
      const deleteg = async (id)=>{
        await deleteDoc(doc(db, 'users', id));
      }
        
     
     


  return (
      <>
      <div className="sidebar">
      <div className="header">
      <Avatar src= {auth.currentUser?.photoURL} alt = "tera net slow hai" />
        <h3>{auth.currentUser?.displayName} </h3>
        <LogoutIcon  onClick = {logout} />
      </div>
      <div className="searchbar">
     <div className="searchbox"> <SearchIcon/>
     <input  value={group} onChange= {e => setgroup(e.target.value)}  type="text" placeholder='create group'/>
     <Button  variant="contained" href="#contained-buttons" onClick = {addgroup}>
     Create
   </Button>  </div>
      </div>
       <div className="userchats">
       {
         showG.map((show)=>{
          return (
            <><div className="userchat_box">
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

      </div>
      </>
  );
};

export default Sidebar;
