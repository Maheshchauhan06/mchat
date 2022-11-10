import React from 'react'
import './Chatpage.css'
import Rightside from '../Components/Rightside/Rightside'
import Leftside from '../Components/Leftside/leftcomp/Leftside'
import { useState } from 'react'

const Chatpage = ({user}) => {

    const [groupid, setgroupid] = useState('')
    const [getgroup, setgetgroup] = useState('')
  
  
  return (
    <div className='chat-box' >
        <div className="Chatleftside">
        <Leftside user={user} groupid={setgroupid} getgroup ={setgetgroup} />
        </div>
        <div className="chatrightside">
         <Rightside groupid={groupid} setgetgroup={getgroup} />
        </div>
    </div>
  )
}

export default Chatpage