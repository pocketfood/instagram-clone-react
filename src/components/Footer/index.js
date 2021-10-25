 // src/components/Header/index.js
 import React from "react";
 import "./Footer.css";


 class Footer extends React.Component{
     render(){
         return (
            <nav className="Footer">
              <div className="Footer-menu">
              <a href="#"> [Vitamins] </a>
              <a href="#"> [Memes] </a>
              <a href="#"> [Return to Top] </a>
              </div>
            </nav>
        );
     }   
 }

 export default Footer;
 