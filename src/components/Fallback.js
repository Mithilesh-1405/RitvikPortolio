import React from 'react';
import GridLoader from "react-spinners/GridLoader";

function Fallback() {
    return (
        <div className="fallback-outer-container" style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            position: "fixed",
            top: 0,
            left: 0,
        }}>
            <div className="fallback-inner-container" style={{
                width: "80%",
                maxWidth: "400px",
                aspectRatio: "1 / 1",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "black",
                alignItems: "center",
                borderRadius: "10px",
            }}>
                <GridLoader
                    color="white"
                    loading={true}
                    size={calculateLoaderSize()}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    speedMultiplier={0.75}
                />
            </div>
        </div>
    );
}

function calculateLoaderSize() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const containerSize = Math.min(vw * 0.8, 400);
    return Math.max(30, Math.min(100, containerSize * 0.3));
}

export default Fallback;