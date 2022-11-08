import React, { useState } from 'react'
import './Register.css'
import Header from '../Components/header/header'
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {

  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("")

  const handlesubmit = async (e)=>{


    console.log("hlo");
    e.preventDefault();
    const user  = await createUserWithEmailAndPassword(auth,email,Password)
      .then(async(user)=>{
        console.log(user.user);
        await updateProfile(user.user,{
          displayName: firstname,
        })
      }).catch((error)=>{
        console.log(error);
      })
      console.log(user);

    setemail("")
    setfirstname("")
    setlastname("")
    setPassword("")
  }
   

  return (
    <div className='box'>  <Header/>
     <form onSubmit={handlesubmit} className="contain-register">
        <input value={firstname} onChange={(e)=>setfirstname(e.target.value)} type="text" placeholder="First Name" />
        <input value={lastname}  onChange={(e)=>setlastname(e.target.value)} type="text" placeholder="Last Name" />

        <input value={email} type="Email" onChange={(e)=>setemail(e.target.value)} placeholder="Email" />

        <input value={Password} type="Password"  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />

        <Button type='submit'  sx={{ marginTop:'.5rem', color :'var(--white)', background:"var(--blue)", ":hover":{color:'var(--blue)',background:'var(--white)'},borderColor:'var(--white)' }} variant="outlined"> Submit </Button>
     </form>
      </div>
  )
}

export default Register