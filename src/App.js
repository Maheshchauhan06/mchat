import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./firebase";
import Landingpage from "./Pages/Landingpage";
import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Chatpage from "./Pages/Chatpage";

const App = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (cuser) => {
      setuser(cuser);
    });
  }, []);

  // motion divs
  const divs = [
    { num: "one div" },
    { num: "two div" },
    { num: "three div" },
    { num: "four div" },
  ];

  return (
    <>
      {user ? (
        <div id="chatpage" className="chatpage">
          <Chatpage user={user} />
        </div>
      ) : (
        <div className="loginpage">
          {divs.map((number) => {
            return (
              <motion.div
                initial={{ opacity: 0.2, y: 5, rotate: "180deg" }}
                animate={{ opacity: 1, y: 0, rotate: "30deg" }}
                transition={{
                  type: "spring",
                  duration: 10,
                  type: "smooth",
                  repeatType: "mirror",
                  repeat: Infinity,
                }}
                className={number.num}
              ></motion.div>
            );
          })}

          <div className="landingpage">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
