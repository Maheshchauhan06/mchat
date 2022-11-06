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
      <motion.div  initial={{ opacity: 0.2, y: 5, rotate:'180deg' }}
      animate={{ opacity: 1, y: 0 , rotate:'30deg' }}
      transition={{ type: "spring", duration: 10,  type: "smooth",
      repeatType: "mirror",
      repeat: Infinity, }}
       className="one div"></motion.div>
      <motion.div initial={{ opacity: 0.2, y: 5, rotate:'180deg' }}
      animate={{ opacity: 1, y: 0 , rotate:'30deg' }}
      transition={{ type: "spring", duration: 10,  type: "smooth",
      repeatType: "mirror",
      repeat: Infinity, }}
       className="two div"></motion.div>
      <motion.div initial={{ opacity: 0.2, y: 5, rotate:'180deg' }}
      animate={{ opacity: 1, y: 0 , rotate:'30deg' }}
      transition={{ type: "spring", duration: 10,  type: "smooth",
      repeatType: "mirror",
      repeat: Infinity, }}
         className="three div"></motion.div>

      <motion.div initial={{ opacity: 0.2, y: 5, rotate:'180deg' }}
      animate={{ opacity: 1, y: 0 , rotate:'30deg' }}
      transition={{ type: "spring", duration: 10,  type: "smooth",
      repeatType: "mirror",
      repeat: Infinity, }}
       className="four div"></motion.div>


      <div className="landingpage">
      <Landingpage/></div>
       </div>
      
      
    

  );
}

export default App;
