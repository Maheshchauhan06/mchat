import React, { createContext, useEffect } from "react";
import "./Chatpage.css";
import Rightside from "../Components/Rightside/Rightside";
import Leftside from "../Components/Leftside/leftcomp/Leftside";
import { useState } from "react";

export const lastmsg = createContext();

const Chatpage = ({ user }) => {
  const [groupid, setgroupid] = useState("");
  const [newgname, setnewgname] = useState("hlo");
  const [latestmsg, setlatestmsg] = useState("");

  return (
    <lastmsg.Provider
      value={{
        latestmsg,
        setlatestmsg,
        setgroupid,
        setnewgname,
        groupid,
        newgname,
      }}
    >
      <div className="chat-box">
        <div className="Chatleftside">
          <Leftside user={user} groupid={setgroupid} newgname={setnewgname} />
        </div>
        <div className="chatrightside">
          <Rightside />
        </div>
      </div>
    </lastmsg.Provider>
  );
};

export default Chatpage;
