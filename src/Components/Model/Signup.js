import React from 'react'
import './Singup.css'

const Signup = () => {
  return (
    <> <div className="container">
     <h1> Sign Up  </h1>
     <input type="text" placeholder='First Name' />
     <input type="text" placeholder='Last Name' />
     <input type="email" placeholder='E-mail' />
     <input type="password" placeholder='Password' />
     <input type="password" placeholder='Confirm Password' />
     
    </div>
    </>
  )
}

export default Signup