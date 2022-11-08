import React from 'react'
import './Singup.css'
import {ReactComponent as Google} from '../../assects/Google.svg'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import { useState } from 'react'

const Signup = () => {

  const [values, setvalues] = useState({
    email : '',
    password : '',
  })

  const sigin = () => {
    signInWithPopup(auth, provider);
}
 
  const login = (e) =>{
    console.log(values.email, values.password);
    e.preventDefault();
     signInWithEmailAndPassword(auth, values.email, values.password)
     .then((user)=>{
      console.log(user +'sign in');
     }).catch((error)=>{
      console.log(error);
     })
  }



  return (
    <> <form onSubmit={login} className="container">
     <h1> Login  </h1>
     <input value={values.email} onChange={(e)=>setvalues({...values, email:e.target.value})} type="email" placeholder='E-mail / User Name' />
     <input value={values.password} onChange={(e)=>setvalues({...values,password:e.target.value})}  type="password" placeholder='Password' />
      <button type='submit' className='signup' >Login</button>
      <div  className="break">
    <p></p> Or Login with <p></p></div>
    <div className="icon">
       <Google  onClick = {sigin} />
      </div>
    </form>
    </>
  )
}

export default Signup