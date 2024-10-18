"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Tabs = ({
    tabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName
}) => {
    const [active, setActive] = useState(tabs[0]);
    const [tabsState, setTabsState] = useState(tabs);

    const moveSelectedTabToTop = (idx) => {
        const newTabs = [...tabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabsState(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(false);

    return (
        <>
            <div
                className={cn(
                    "flex flex-row items-center justify-center [perspective:1300px] relative overflow-auto sm:overflow-visible no-visible-scrollbar w-full",
                    containerClassName
                )}
            >
                <div className="inline-flex">
                    {tabs.map((tab, idx) => (
                        <button
                            key={tab.title}
                            onClick={() => {
                                moveSelectedTabToTop(idx);
                            }}
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            className={cn("relative px-4 py-2 rounded-full bg-white bg-opacity-10 m-1", tabClassName)}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {active.value === tab.value && (
                                <motion.div
                                    layoutId="clickedbutton"
                                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                    className={cn(
                                        "absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md rounded-full border border-purple-600",
                                        activeTabClassName
                                    )}
                                />
                            )}

                            <span className="relative block text-white dark:text-white">
                                {tab.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            <FadeInDiv
                tabs={tabsState}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn("mt-12 w-full", contentClassName)}
            />
        </>
    );
};

export const FadeInDiv = ({ className, tabs, hovering }) => {
    const isActive = (tab) => {
        return tab.value === tabs[0].value;
    };

    return (
        <div className="relative w-full h-full">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,
                    }}
                    className={cn("w-full h-full absolute top-0 left-0", className)}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    );
};

export default Tabs;