import styles from '../styles/homecontent.module.css'
import React from 'react'
import memoji from '../images/memoji.png'

function Homecontent() {
    return (
        <div className={styles.homecontent}>
            <div className={styles.homeGrid} id='home'>
                <div className={styles.nameDesig}>
                    <div className={styles.name}>
                        <h1>Ritvik</h1>
                        <h1 className={styles.space}>'</h1>
                        <h1>Chunamari</h1>
                    </div>
                    <div className={styles.designation}>
                        Cerebral Palsy <strong>&middot;</strong> Creative Designer <strong>&middot;</strong> Problem Solver <strong>&middot;</strong> Tech Enthusiast
                    </div>
                </div>
                <div className={styles.memoji}>
                    <img src={memoji} alt="Memoji" loading='lazy' />
                </div>
            </div>
        </div>
    );
}

export default Homecontent
