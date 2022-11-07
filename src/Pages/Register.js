import React from 'react'
import './Register.css'
import Header from '../Components/header/header'
import Button from '@mui/material/Button';

const Register = () => {
  return (
    <div className='box'>  <Header/>
     <div className="contain-register">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="Email" placeholder="Email" />
        <input type="Password" placeholder="Password" />
        <input type="Password" placeholder="Confirm Password" />
        <Button sx={{ marginTop:'.5rem', color :'var(--white)', borderColor:"var(--white)", ":hover":{color:'var(--blue)',background:'var(--white)'} }} variant="outlined"> Submit </Button>
     </div>
      </div>
  )
}

export default Register