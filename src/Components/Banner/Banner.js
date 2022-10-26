import React from 'react'
import LoginModel from '../Model/LoginModel'
import './index.css'
import {ReactComponent as Fhone} from '../../assects/phone.svg'

const Banner = () => {
  return (
    <> <div className="contain-banner">
      <div className="banner-leftside">
      <div className="contain2">
       <div className="discribtion">
      <h2>The Smartest way </h2>
      <h2>Commmunication is here</h2>
       </div> <div className="discribtion2">
       <p>Share files, chat with tearms,manage</p>
      <p>work on the go. Plan & Track your works</p>
      <p>and deadline</p>
       </div>
      <LoginModel/>
      </div>
      </div>
      <div className="banner-rightside">
      <Fhone className='phone' />
      </div>
    </div>
    </>
  )
}

export default Banner