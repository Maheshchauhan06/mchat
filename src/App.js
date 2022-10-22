import { onAuthStateChanged} from 'firebase/auth';
import { useEffect, useState } from 'react';
import './App.css';
import { auth} from './firebase';
import Sidebar from './Pages/Sidebar';
import Landingpage from './Pages/Landingpage';

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
      <Landingpage/>
      
       </div>
      
      
    

  );
}

export default App;
