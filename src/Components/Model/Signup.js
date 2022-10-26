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
     <h1> Sign Up  </h1>
     <input type="text" placeholder='First Name' />
     <input type="text" placeholder='Last Name' />
     <input type="email" placeholder='E-mail' />
     <input type="password" placeholder='Password' />
     <input type="password" placeholder='Confirm Password' />
      <button className='signup' >Sign up</button>
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