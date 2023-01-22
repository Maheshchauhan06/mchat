import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Chats.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
import db, { auth } from "../../../firebase";
import { motion } from "framer-motion";
import { useContext } from "react";
import { lastmsg } from "../../../Pages/Chatpage";

const Chats = ({ id, groupname }) => {
  const { setgroupid, setnewgname } = useContext(lastmsg);

  const deleted = async () => {
    await deleteDoc(doc(db, "users", id));
    setgroupid("");
    setnewgname("");
  };

  const value = () => {
    setgroupid(id);
    setnewgname(groupname);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 2 }}
        onClick={value}
        className="userchat_box"
      >
        <img
          src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"
          alt="internet problem"
        />{" "}
        <div>
          {" "}
          <h4> {groupname} </h4>{" "}
        </div>
        <IconButton
          sx={{
            marginLeft: "auto",
            color: "black",
            ":hover": {
              color: "white",
              backgroundColor: "black",
            },
          }}
          aria-label="delete"
        >
          <DeleteIcon sx={{ fontSize: "70%" }} onClick={deleted} />
        </IconButton>
      </motion.div>
    </>
  );
};

export default Chats;
