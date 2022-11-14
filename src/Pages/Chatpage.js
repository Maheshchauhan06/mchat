import React, { useEffect } from 'react'
import './Chatpage.css'
import Rightside from '../Components/Rightside/Rightside'
import Leftside from '../Components/Leftside/leftcomp/Leftside'
import { useState } from 'react'
import db, { auth } from '../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

const Chatpage = ({user}) => {

    const [groupid, setgroupid] = useState('')
    const [newgname, setnewgname] = useState('hlo')
    const [photourl, setphotourl] = useState('')
  
    useEffect(async() => {
    const  payload = {
        name: auth.currentUser?.displayName,
        photo : auth.currentUser?.photoURL,
        id : auth.currentUser?.uid,
        timestamp : serverTimestamp(),
      }
   await setDoc(doc(db,'people',auth.currentUser?.email),payload)
    }, [ ])
    
  
  return (
    <div className='chat-box' >
        <div className="Chatleftside">
        <Leftside user={user} groupid={setgroupid} newgname={setnewgname} photourl={setphotourl} />
        </div>
        <div className="chatrightside">
         <Rightside groupid={groupid} newgname={newgname} photourl={photourl} />
        </div>
    </div>
  )
}

export default Chatpage