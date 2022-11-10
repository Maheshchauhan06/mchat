import React from 'react'
import './Chatpage.css'
import Rightside from '../Components/Rightside/Rightside'
import Leftside from '../Components/Leftside/leftcomp/Leftside'

const Chatpage = ({user}) => {

  

  
  return (
    <div className='chat-box' >
        <div className="Chatleftside">
        <Leftside user={user} />
        </div>
        <div className="chatrightside">
         <Rightside/>
        </div>
    </div>
  )
}

export default Chatpage