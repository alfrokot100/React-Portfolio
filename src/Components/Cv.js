import MyProjects from '../assets/Data.json'
import "./Cv.css"
import React from "react";


export default function CV() {
    return (
        <div id="cvBody">
            <section className="cv-container">
                <h1 className="cv-title">Mitt CV</h1>

                <div className="cv-sections">
                    {/* Arbetsplatser */}
                    <div className="cv-category">
                        <h2>Arbetslivserfarenhet</h2>
                        {MyProjects.Arbetsplatser.map((proj, index) => (
                            <div className="cv-card arbetsplats" key={index}>
                                <h3 className='title'>{proj.roll}</h3>
                                <p className='text'>{proj.Desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Utbildning */}
                    <div className="cv-category">
                        <h2>Utbildning</h2>
                        {MyProjects.Utbildning.map((proj, index) => (
                            <div className="cv-card utbildning" key={index}>
                                <h3 className='title'>{proj.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}