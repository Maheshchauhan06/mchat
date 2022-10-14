import { Google } from '@mui/icons-material';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import './App.css';
import { auth, provider } from './firebase';
import Sidebar from './Sidebar';
import Chat from './Chat'
import LoginIcon from '@mui/icons-material/Login';

const App =() => {
    const [user, setuser] = useState([]);
   
    useEffect(() => {
     onAuthStateChanged(auth , (cuser)=>{
       setuser(cuser);
     })
    }, []);

    const sigin = () => {
        signInWithPopup(auth, provider);
    }
     
    

  return (
      user ? <div className="chatpage">
       <div className="chatbox">
      <Sidebar user = {user} />
      
      </div>
     
      </div> :  <div className="loginpage">
       <div className="loginbox">
       <Google/>
       <h1> Do Login First  </h1>
       <LoginIcon onClick = {sigin}  />
       </div>
       </div>
      
      
    

  );
}

export default App;
