import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import './Chatpage.css'

const Chatpage = (user) => {

    const logout = ()=>{
        signOut(auth,user)
    }

  return (
    <> <div className="box">
    <button onClick={logout} >logout</button>
    <h1>hlo</h1>
    </div>
    </>
  )
}

export default Chatpage