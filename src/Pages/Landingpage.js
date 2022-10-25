import { Google } from '@mui/icons-material'
import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import LoginModel from "../Components/Model/LoginModel"
import './Landingpage.css'

const Landingpage = () => {

  const sigin = () => {
    signInWithPopup(auth, provider);
}


  return (
    <div className='contain'> 
    <div className="loginbox">
    <LoginModel/>
    <Google  onClick = {sigin} />
    <h1> Do Login By Google  </h1>
    </div></div>
  )
}

export default Landingpage