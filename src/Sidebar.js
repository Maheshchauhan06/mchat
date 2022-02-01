import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Sidebar = ( user) => {
    const logout = () =>{
        signOut(auth , user)
    }
  return (
      <>
      <div className="sidebar">
      <div className="header">
      <Avatar src= {auth.currentUser?.photoURL} />
        <h3>{auth.currentUser?.displayName} </h3>
        <LogoutIcon  onClick = {logout} />
      </div>
      <div className="searchbar">
     <div className="searchbox"> <SearchIcon/>
     <input type="search"  /></div>
      </div>
       <div className="userchats">
       <div className="userchat_box">
       <Avatar/>
       <h4>mahesh chauhan</h4>
       </div>
       <div className="userchat_box">
       <Avatar/>
       <h4>mahesh chauhan</h4>
       </div>
       </div>

      </div>
      </>
  );
};

export default Sidebar;
