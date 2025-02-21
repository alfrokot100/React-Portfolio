import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";


export default function Header (){
    return(
        <header>
            <a href="#Home" class="logo">Affe</a>
            <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Portfolio</NavLink>
            <NavLink to="/cv" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CV</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
            </nav>
    </header>
    );
}