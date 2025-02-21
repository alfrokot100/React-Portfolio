import React from "react";
import "./Contact.css"

export default function Contact (){
    return(
        <div id="formBody">
            <div class="container">
            <h1>Kontakt</h1>
            <form className="KontaktSida">
                <div class="main-user-info">
                    <div className="user-input">
                    <label htmlFor="name">Förnamn: </label>
                    <input type="text" id="name" name="name" placeholder="Skriv in ditt namn" required />
                    </div>

                    <div className="user-input">
                    <label htmlFor="mail">E-mail: </label>
                    <input type="email" id="email" name="email" placeholder="JaneDoe@mail.com" required />
                    </div>  
                </div>

                    <div className="msg-box"> 
                    <label htmlFor="message">Meddelande</label><br/>
                    <textarea id="message" name="message" rows="5" placeholder="Skriv in eventuell fundering här"></textarea>
                    </div> 

                <div className="btn-form">
                    <button type="submit">Skicka</button>
                </div>
            </form>
        </div>
        </div>
    );
}