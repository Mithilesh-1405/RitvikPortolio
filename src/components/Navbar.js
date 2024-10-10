import React, { useState, useEffect } from 'react'
import '../styles/navbar.css'
import CustomNavLink from './CustomNavLink'
import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const scrollThreshold = 1780;
    const isHomePage = location.pathname === "/";

    // Handle scroll event to set navbar background
    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= scrollThreshold) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleSidebarToggle = (e) => {
        setIsSidebarOpen(e.target.checked);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div >
            <nav style={{
                backgroundColor: (isSidebarOpen || (isHomePage && isScrolled)) || !isHomePage ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)',
                transition: 'background-color 0.3s ease',
            }}>
                <input
                    type="checkbox"
                    id="sidebar-active"
                    checked={isSidebarOpen}
                    onChange={handleSidebarToggle}  // Handle sidebar toggle
                />

                {/* <div className='sidebar-btn'> */}
                <label htmlFor="sidebar-active" className='open-sidebar-button'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    </div>
                </label>
                <label htmlFor="sidebar-active" className='close-sidebar-button'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </div>
                </label>
                {/* </div> */}
                <a className='logo'>RC</a>

                <div className="links-container">
                    <CustomNavLink
                        to="/"
                        targetPage="/"
                        targetSection="home"
                        spy={true}
                        smooth={true}
                        offset={-300}
                        duration={50}
                        className='fancy'
                    >
                        Home
                    </CustomNavLink>
                    <CustomNavLink
                        to="/"
                        targetPage="/"
                        targetSection="about"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        delay={0}
                        duration={50}
                        className='fancy'>
                        About
                    </CustomNavLink>
                    <CustomNavLink
                        to="/"
                        targetPage="/"
                        targetSection="work"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        delay={0}
                        duration={50}
                        className='fancy'>
                        Work
                    </CustomNavLink>
                    <CustomNavLink
                        to="/"
                        targetPage="/"
                        targetSection="contact"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        delay={0}
                        duration={50}
                        className='fancy'>
                        Contact
                    </CustomNavLink>
                    <a href='https://drive.google.com/file/d/1hcMD4LtoP7Iw09-y881hJCUTtngaSbyC/view?usp=drivesdk'
                        className='fancy'>
                        Resume
                    </a>
                    <div class="card">
                        <a class="social-link3" href='https://www.instagram.com/ritvikchunamari?igsh=MXZxaWJuZ3Rkc2RzcA=='>
                            <svg width="24px" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                        </a>
                        <a class="social-link2" href='https://www.linkedin.com/in/ritvikchunamari/'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </a>
                        <a class="social-link1" href='https://www.x.com/ritvikchunamari'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#fff"><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" /></svg>
                        </a>
                        <a class="social-link4" href='https://mail.google.com/mail/?view=cm&fs=1&to=ritvikchunamari@gmail.com'>
                            <svg data-name="1-Email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill='#fff'><path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" /></svg>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar