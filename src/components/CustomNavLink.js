import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const CustomNavLink = ({ to, spy, smooth, offset, duration, className, children, targetPage, targetSection }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isTargetPage = location.pathname === targetPage;

    const handleClick = (event) => {
        if (!isTargetPage) {
            event.preventDefault();
            navigate(targetPage);
            setTimeout(() => {
                scroller.scrollTo(targetSection, {
                    spy: spy,
                    smooth: smooth,
                    offset: offset,
                    duration: duration
                });
            }, 100);
        }
    };

    if (isTargetPage) {
        return (
            <ScrollLink
                to={targetSection}
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={className}
            >
                {children}
            </ScrollLink>
        );
    } else {
        return (
            <RouterLink
                to={targetPage}
                className={className}
                onClick={handleClick}
            >
                {children}
            </RouterLink>
        );
    }
};

export default CustomNavLink;