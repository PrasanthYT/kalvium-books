import React from "react";
import GBook from "../assets/GBooks.png";
import Help from "../assets/help.png";
import Search from "../assets/search.png";
import Success from "../assets/success.png"
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  const location = useLocation();

  const register = () => {
    navigate("/register");
  };

  const home = () => {
    navigate("/home");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const params = new URLSearchParams(location.search);
  const registeredUserName = params.get("name");

  return (
    <>
      <nav>
        <div className="navigation">
          <img onClick={home} className="logo" src={GBook} alt="books-logo" />
        </div>
        <div className="details">
          <div className="search-bar">
            <img className="search" src={Search} alt="search-icon" />
            <input type="text" placeholder="Search your favourite book..." value={searchTerm}
              onChange={handleSearchChange}/>
          </div>
          <div className="items">
            <a href="">About</a>
            <a href="">All Books</a>
            <a href="">Contact Us</a>
          </div>
          <div className="register">
            {registeredUserName ? (
              <span className="user-name">Welcome, {registeredUserName}</span>
            ) : (
              <button onClick={register} className="reg-btn">
                Register
              </button>
            )}
          </div>
          {
            !registeredUserName ? (
              <div className="help-box">
                <p>Register for a better experience!</p>
                <img className="help" src={Help} alt="help-icon" />
              </div>
            ) : (
              <div className="finished-box">
                <p>You have Registered Successfully</p>
                <img className="success" src={Success} alt="help-icon" />
              </div>
            )
          }
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
