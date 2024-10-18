import "../styles/homepage.css";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Homecontent from "./Homecontent";
import Hoverpage from "./Hoverpage";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Shader from "./Shader";
import Navbar from "./Navbar";

function Homepage() {
    const comp = useRef(null);
    const blackScreenRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();

            gsap.set(contentRef.current, { opacity: 0 });

            t1.set(blackScreenRef.current, { backgroundColor: "black", zIndex: 1000 })
                .to(blackScreenRef.current, {
                    duration: 0.8,
                    opacity: 1,
                })
                .to(contentRef.current, {
                    duration: 0.2,
                    opacity: 1,
                })
                .to(blackScreenRef.current, {
                    duration: 0.5,
                    opacity: 0,
                    zIndex: -1,
                });
        }, comp);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const lightElement = document.querySelector(".light");

        if (lightElement) {
            const handleMouseMove = (e) => {
                document.documentElement.style.setProperty("--x", e.clientX + "px");
                document.documentElement.style.setProperty("--y", e.clientY + "px");
            };

            const handleTouchMove = (e) => {
                const touch = e.touches[0];
                document.documentElement.style.setProperty("--x", touch.clientX + "px");
                document.documentElement.style.setProperty("--y", touch.clientY + "px");
            };

            lightElement.addEventListener("mousemove", handleMouseMove);
            lightElement.addEventListener("touchmove", handleTouchMove);

            return () => {
                lightElement.removeEventListener("mousemove", handleMouseMove);
                lightElement.removeEventListener("touchmove", handleTouchMove);
            };
        }
    }, []);

    return (
        <div className="preloader" ref={comp}>
            <div
                ref={blackScreenRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "black",
                    zIndex: 1000,
                }}
            ></div>
            <div
                id="slider"
                ref={contentRef}
                style={{ backgroundColor: "transparent" }}
            >
                <Navbar />
                <Shader />
                <div
                    style={{ position: "relative", top: "5.6rem", overflow: "hidden" }}
                >
                    <Homecontent />
                    <div>
                        <div className="light">
                            <Hoverpage />
                        </div>
                    </div>
                    <About />
                    <Work />
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
