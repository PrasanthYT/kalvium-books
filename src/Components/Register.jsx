import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../layouts/Footer"
import "../CSS/Form.css";
import Navbar from "../layouts/Navbar";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const pstyle = {
    color: "red",
    fontSize: "10px",
  };

  const [formError, setFormError] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const isRegistered = localStorage.getItem("isRegistered");
    if (isRegistered === "true") {
      navigate("/home");
    }
  }, [navigate]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormError(errors);

    const errorKeys = Object.keys(errors);
    if (errorKeys.length === 0) {
      // Registration successful
      toast("Registration Successful!");
      setFormSubmitted(true);
      localStorage.setItem("isRegistered", "true");
    } else {
      setFormSubmitted(false);
    }
  };

  const validate = (data) => {
    const errors = {};

    if (data.name.trim().length < 3 || data.name.trim().length > 30) {
      errors.name = "Name should be between 3 and 30 characters";
    }

    if (!data.email.includes("@")) {
      errors.email = "Invalid email address";
    }

    if (data.password.length < 10) {
      errors.password = "Password must be at least 10 characters long";
    }

    if (data.repeatPassword !== data.password) {
      errors.repeatPassword = "Passwords do not match";
    }

    return errors;
  };

  if (formSubmitted) {
    navigate("/?name=" + encodeURIComponent(formData.name));
  }

  return (
    <>
      <Navbar/>
      <div className="form-parent">
        <ToastContainer />
        <form onSubmit={formSubmit}>
          <div className="tost">
            {formSubmitted && <p>Registration Successful!</p>}
          </div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInput}
            value={formData.name}
          />
          {formError.name && <p style={pstyle}>{formError.name}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInput}
            value={formData.email}
          />
          {formError.email && <p style={pstyle}>{formError.email}</p>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
            value={formData.password}
          />
          {formError.password && <p style={pstyle}>{formError.password}</p>}

          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            onChange={handleInput}
            value={formData.repeatPassword}
          />
          {formError.repeatPassword && (
            <p style={pstyle}>{formError.repeatPassword}</p>
          )}

          <input className="submit-btn" type="submit" value="Register" />
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Register;