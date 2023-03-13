import React, { useState } from "react"

import logo from "./logo.png"
import "./Header.scss"
import { Link } from "react-router-dom"

const Header = () => {
    const [title, setTitle] = useState("Please, login!");
   

   
    const changeTitle = () =>{
        setTitle("is logged");
    }
    //const clickMe = (login) => {
        //console.log('clicked' +login);
   // }
    return (
    <div>
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src={ logo } alt="logo" className="logo" />
                </div>
            </div>
        
        <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item"><Link to="/"> Home</Link></li>
            <li className="nav-item"><Link to="shop"> Shop</Link></li>
            <li className="nav-item"><Link to="About"> About</Link></li>
            <li className="nav-item"><Link to="Contact"> Contact</Link></li>
            </ul>
            
        </nav>
        <div className="login-container">
            <button className="login-button" onClick={ () => changeTitle() }>login</button>
        </div>
        
        
        </header>
        <h3>{ title }</h3>
    </div>
    );
}

export default Header;