import React from 'react'
import './Singup.css'
import {ReactComponent as Google} from '../../assects/Google.svg'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'

const Signup = () => {

  const sigin = () => {
    signInWithPopup(auth, provider);
}
 



  return (
    <> <div className="container">
     <h1> Login  </h1>
     <input type="email" placeholder='E-mail / User Name' />
     <input type="password" placeholder='Password' />
      <button className='signup' >Login</button>
      <div className="break">
    <p></p> Or Login with <p></p></div>
    <div className="icon">
       <Google  onClick = {sigin} />
      </div>
    </div>
    </>
  )
}

export default Signup