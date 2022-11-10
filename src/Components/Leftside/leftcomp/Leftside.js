import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Leftside.css'
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { auth } from '../../../firebase';
import Button from '@mui/material/Button';
import Chats from '../Chats/Chats';
import { signOut } from 'firebase/auth';


const Leftside = ({user}) => {

   const logout = () =>{
     signOut(auth,user)
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
   <div className="searchbox"> <SearchIcon/>
   <input  type="text" placeholder='create group'/>
   <Button variant="contained" href="#contained-buttons" >
   Create
 </Button>  </div>
    </div>
     <Chats/>
    </div> 
    </div>
    </>
  )
}

export default Leftside