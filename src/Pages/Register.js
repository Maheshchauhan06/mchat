import React, { useState } from 'react'
import './Register.css'
import Header from '../Components/header/header'
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {
   const [values, setvalues] = useState({
     email : '',
     password : '',
     firstname : '',
     lastname : '',   })

  const handlesubmit = async (e)=>{


    console.log("hlo");
    e.preventDefault();
    const user  = await createUserWithEmailAndPassword(auth,values.email,values.password)
      .then(async(user)=>{
        console.log(user.user);
        await updateProfile(user.user,{
          displayName: values.firstname,
        })
      }).catch((error)=>{
        console.log(error);
      })
      console.log(user);
  
      setvalues({
        email : '',
        password : '',
        firstname : '',
        lastname : '',
      })
   
  }
   

  return (
    <div className='box'>  <Header/>
     <form onSubmit={handlesubmit} className="contain-register">
        <input value={values.firstname} onChange={(e)=>setvalues({...values, firstname: e.target.value})} type="text" placeholder="First Name" />
        <input  value={values.lastname} onChange={(e)=>setvalues({...values, lastname: e.target.value})} type="text" placeholder="Last Name" />

        <input value={values.email} type="Email"onChange={(e)=>setvalues({...values, email: e.target.value})}  placeholder="Email" />

        <input value={values.password} type="Password" onChange={(e)=>setvalues({...values, password: e.target.value})}  placeholder="Password" />

        <Button type='submit'  sx={{ marginTop:'.5rem', color :'var(--white)', background:"var(--blue)", ":hover":{color:'var(--blue)',background:'var(--white)'},borderColor:'var(--white)' }} variant="outlined"> Submit </Button>
     </form>
      </div>
  )
}

export default Register