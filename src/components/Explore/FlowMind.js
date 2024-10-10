import React from 'react'
import styles from '../../styles/Explore/flowmind.module.css';

function FlowMind({ FlowMind }) {
    return (
        <div className={styles.flowmind_container}>
            {FlowMind.map((image, index) => (
                <div key={index} className={styles.flowmind_item}>
                    <div className={styles.FlowMind_heading}>
                        <span>{image.title}</span>
                    </div>
                    <img src={image.src} alt={image.alt} className={styles.flowmind_image} />
                </div>
            ))}
        </div>
    );
}

export default FlowMind;
