import React from "react";
import "../../styles/Explore/userpersonas.css";
import PersonaSection from '../Explore/PersonaSection';

function UserPersonas({ persona }) {
    return (
        <div className="personacontainer">
            <div className="user_persona_heading">
                <p>User Personas</p>
            </div>
            {persona.map((personaData, index) => (
                <PersonaSection key={index} persona={personaData} />
            ))}
        </div>
    );
}

export default UserPersonas;
