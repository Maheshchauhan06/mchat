import { onAuthStateChanged} from 'firebase/auth';
import { useEffect, useState } from 'react';
import './App.css';
import { auth} from './firebase';
import Sidebar from './Pages/Sidebar';
import Landingpage from './Pages/Landingpage';
import { motion } from 'framer-motion'


const App =() => {
    const [user, setuser] = useState([]);
   
    useEffect(() => {
     onAuthStateChanged(auth , (cuser)=>{
       setuser(cuser);
     })
    }, []);

    

  return (
      user ? <div className="chatpage">
       <div className="chatbox">
      <Sidebar user = {user} />
      </div>
     
      </div> :  
      <div className="loginpage">
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1 }}
       className="one div"></motion.div>
      <div  initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1 }}
       className="two div"></div>
      <div   initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1 }} className="three div"></div>
      <div  initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1 }} className="four div"></div>
      <div className="landingpage">
      <Landingpage/></div>
       </div>
      
      
    

  );
}

export default App;
