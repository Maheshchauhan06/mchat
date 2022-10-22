import { Google } from '@mui/icons-material'
import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';

const Landingpage = () => {

  const sigin = () => {
    signInWithPopup(auth, provider);
}


  return (
    <div> <div className="loginbox">
    <Google  onClick = {sigin} />
    <h1> Do Login By Google  </h1>
    </div></div>
  )
}

export default Landingpage