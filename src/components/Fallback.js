import React from 'react';
import GridLoader from "react-spinners/GridLoader";

function Fallback() {
    return (
        <div className="fallback-container" style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            backgroundColor: "black"
        }}>
            <GridLoader
                color="white"
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Fallback;
