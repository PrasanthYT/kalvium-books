import React from "react";
import "./Footer.css"

import GBook from "../assets/GBooks.png";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";

function Footer(){

    const github = () => {
        window.open("https://github.com/prasanthj2023", "_blank");
      };
    
      const linkedin = () => {
        window.open(
          "https://www.linkedin.com/in/prasanth-j-b34051284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          "_blank"
        );
      };

    return(
        <>
            <footer>
                <div className="imgs">
                    <img className="logo" src={GBook} alt="g-books" />
                </div>
                <div className="line"></div>
                <div className="detail">
                    <h3>About Author</h3>
                    <h5>Prasanth</h5>
                    <div className="images">
                        <img onClick={github} src={Github} alt="github-logo" />
                        <img onClick={linkedin} src={LinkedIn} alt="linked-in-logo" />
                    </div>
                </div>
                <div className="line"></div>
                <div className="newsletter">
                    <label htmlFor="email">Subscribe to our newsletter:</label>
                    <input type="text" id="email" placeholder="Enter your E-mail..."/>
                    <button>Submit</button> 
                </div>
            </footer>
        </>
    )
}

export default Footer;