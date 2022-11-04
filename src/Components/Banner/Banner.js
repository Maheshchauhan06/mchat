import React from 'react'
import LoginModel from '../Model/LoginModel'
import { motion } from 'framer-motion'
import './index.css'
import {ReactComponent as Fhone} from '../../assects/phone.svg'

const Banner = () => {
  return (
    <> <div className="contain-banner">
      <div className="banner-leftside">
      <motion.div   initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 3 }}
       className="contain2">
       <div className="discribtion">
      <h2>The Smartest way </h2>
      <h2>Commmunication is here</h2>
       </div> <div className="discribtion2">
       <p>Share files, chat with tearm's , manage</p>
      <p>work on the go. Plan & Track your works</p>
      <p>and deadline</p>
       </div>
      <LoginModel/>
      </motion.div>
      </div>
      <motion.div  initial={{ x: -4 , y: -4, rotate:'0deg' }}
      animate={{ y: 2, x:2 , rotate:'8deg'}}
      transition={{
        type: "smooth",
        repeatType: "mirror",
        duration: 2,
        repeat: Infinity,
      }} className="banner-rightside">
      <Fhone className='phone' />
      </motion.div>
    </div>
    </>
  )
}

export default Banner