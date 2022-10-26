import React from 'react'
import './header.css'
import LoginModel from '../Model/LoginModel'

const Header = () => {
  return (
    <> <div className="contain-header">
      <h2>Mchat</h2>
      <LoginModel/>
    </div>
    </>
  )
}

export default Header