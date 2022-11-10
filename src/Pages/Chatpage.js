import React from 'react'
import './Chatpage.css'
import Rightside from '../Components/Rightside/Rightside'
import Leftside from '../Components/Leftside/leftcomp/Leftside'
import { useState } from 'react'

const Chatpage = ({user}) => {

    const [groupid, setgroupid] = useState('')
  
  
  return (
    <div className='chat-box' >
        <div className="Chatleftside">
        <Leftside user={user} groupid={setgroupid}/>
        </div>
        <div className="chatrightside">
         <Rightside groupid={groupid} />
        </div>
    </div>
  )
}

export default Chatpage