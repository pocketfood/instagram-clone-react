 // src/components/Header/index.js
 import React from "react";
 import "./Header.css";


 class Header extends React.Component{
     render(){
         return (
            <nav className="Nav">
              <div className="Nav-menus">
                <div className="Nav-brand">
                  <a className="Nav-brand-logo" href="/">
                    Instagram
                  </a>
                </div>
                <div className="Nav-account">
                  <a className="user" href="/account"> 
                  </a>
                  <a className="upload-button" href="#"> 
                  </a>
                </div>
              </div>
            </nav>
        );
     }   
 }

 export default Header;
 