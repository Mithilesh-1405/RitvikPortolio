import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Explore/CustomTab.module.css';

const CustomTab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabsContainerRef = useRef(null);

    useEffect(() => {
        const tabsContainer = tabsContainerRef.current;
        if (tabsContainer) {
            const handleWheel = (event) => {
                if (event.deltaY !== 0) {
                    event.preventDefault();
                    tabsContainer.scrollLeft += event.deltaY * 1;
                }
            };

            tabsContainer.addEventListener('wheel', handleWheel);
            return () => {
                tabsContainer.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);

    return (
        <div className={styles.outer_container}>
            <div className={styles.container}>
                <div className={styles.proto_heading}>
                    <p>Prototype</p>
                </div>
                <div className={styles.tabContainer}>
                    <div className={styles.tabs} ref={tabsContainerRef}>
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`${styles.tabButton} ${activeTab === index ? styles.tabButtonActive : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.content}>
                    <img src={tabs[activeTab].src} alt="" loading='lazy' />
                </div>
            </div>
        </div>
    );
};

export default CustomTab;