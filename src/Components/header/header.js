import React from 'react'
import './header.css'
import LoginModel from '../Model/LoginModel'

const Header = () => {
  return (
    <> <div className="contain-header">
    <a  style={{ textDecoration:'none' }}  href='/'>
    <h2>Mchat</h2>
    </a>
      <div className="leftside">
      <a style={{ textDecoration:'none' }}  href='/register'>
      <h2>Register</h2>
      </a>
      <LoginModel/></div>
    </div>
    </>
  )
}

export default Header