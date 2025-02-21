import React from "react";
import "./About.css";
import { Link } from "react-router-dom";


export default function About(){
    return(
        <section class="about">
        <div class="about-content">
            <div class="about-text">
                <h2>Hej! Jag är en blivande utvecklare</h2>
                <p>
                    Jag heter Alfred och är en **.NET-utvecklare** med ett stort intresse för webbutveckling.
                    Med erfarenhet av **C#, JavaScript, React och SQL** bygger jag moderna och funktionella lösningar.
                </p>
                <p>
                    Jag tycker om att lösa problem och lära mig nya teknologier. När jag inte kodar gillar jag att spela spel,
                    träna och experimentera med nya programmeringsprojekt.
                </p>
                <Link to ="/portfolio" className="btn-about">Se mina projekt</Link>
            </div>
        </div>
    </section>
    );
}