import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../../styles/Explore/tabspage.css'
import contact from '../../images/pages/contact.png';

function TabsPage() {
    const [key, setKey] = useState('home');

    return (
        <div className={styles.tab}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="Landing" >
                    <div className={styles.tabContent}>
                        <div className={styles.imagecontainer}>
                            <img src={contact} alt="Landing page" loading='lazy' />
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Contact">
                    <div className={styles.tabContent}>
                        <div className={styles.imagecontainer}>
                            <img src={contact} alt="Contact page" loading='lazy' />
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default TabsPage;