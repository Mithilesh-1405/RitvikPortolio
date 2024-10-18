import React from 'react';
import '../styles/about.css';

function Skillbtn({ btnName, certbtn, isHovered }) {
    return (
        <div className='btngrid'>
            <button className={`skillbtn ${isHovered ? 'hidden' : ''}`}>
                {btnName}
            </button>
        </div>
    );
}

export default Skillbtn;
