import React from "react";
import PortraitCV from "../Images/PortraitCv.jpg";
import "./Home.css";

export default function Home(){
    return(
    <section class="home">
        <div class="home-image">
            <img src={PortraitCV} alt="Pic of computers" />
        </div>
        <div class="home-content">
            <h1>Hello, detta är <span>Alfred</span></h1>
            <h3 class="typing-text">Jag är en studerande<span></span></h3>
        </div>   
    </section>
    );
}