import React from "react";
import "./header.css";
import LoginModel from "../Model/LoginModel";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {" "}
      <div className="contain-header">
        <Link style={{ textDecorationLine: "none" }} to={`/`}>
          <h2>Mchat</h2>
        </Link>
        <div className="leftside">
          <Link style={{ textDecorationLine: "none" }} to={"/register"}>
            <h2>Register</h2>
          </Link>
          <LoginModel />
        </div>
      </div>
    </>
  );
};

export default Header;
