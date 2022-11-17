import React, { useEffect } from 'react'
import './Chatpage.css'
import Rightside from '../Components/Rightside/Rightside'
import Leftside from '../Components/Leftside/leftcomp/Leftside'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber} from '../ReduxComp/Action/Action'

const Chatpage = ({user}) => {

  const mystate = useSelector((state)=> state.Counter )
  const  dispatch =  useDispatch();

    const [groupid, setgroupid] = useState('')
    const [newgname, setnewgname] = useState('hlo')
  
    
  
  return (
    <div className='chat-box' >
        <div className="Chatleftside">
         <Leftside user={user} groupid={setgroupid} newgname={setnewgname} />
        </div>
        <div className="chatrightside">
         <Rightside groupid={groupid} newgname={newgname} />
        </div>
    </div>
  )
}

export default Chatpage