import gsap from "gsap";
import React, { lazy, Suspense, useLayoutEffect, useRef } from "react";
import { AdminTabs } from './Data/PrototypeTabs';
import { AdminData } from './Data/LandingData'
import { AdminUserPersona } from './Data/UserPersonasData';
import { AdminFlowMind } from './Data/FlowchartData';
import Fallback from '../Fallback';

const Navbar = lazy(() => import('../Navbar'))
const CustomTab = lazy(() => import('./CustomTab'))
const FlowMind = lazy(() => import('./FlowMind'))
const UserPersonas = lazy(() => import('./Userpersonas'))
const Landing = lazy(() => import('../Explore/Landing'))

function Page3() {
    const comp = useRef(null);
    const blackScreenRef = useRef(null);
    const contentRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();

            gsap.set(contentRef.current, { opacity: 0 });

            t1.set(blackScreenRef.current, { backgroundColor: "black", zIndex: 1000 })
                .to(blackScreenRef.current, {
                    duration: 0.6,
                    opacity: 1
                })
                .to(contentRef.current, {
                    duration: 0.2,
                    opacity: 1,
                })
                .to(blackScreenRef.current, {
                    duration: 0.5,
                    opacity: 0,
                    zIndex: -1
                });
        }, comp);

        return () => ctx.revert();
    }, []);
    return (
        <div className="preloader" ref={comp}>
            <div ref={blackScreenRef} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black', zIndex: 1000 }}></div>
            <div id="slider" ref={contentRef} style={{ backgroundColor: "transparent" }}>
                <Suspense fallback={<Fallback />}>
                    <Navbar />
                    <div style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }}>
                        <Landing work={AdminData} />
                        <UserPersonas persona={AdminUserPersona} />
                        <FlowMind FlowMind={AdminFlowMind} />
                        <CustomTab tabs={AdminTabs} />
                    </div>
                </Suspense >
            </div>
        </div>

    )
}


export default Page3
