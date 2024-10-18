
import React from 'react';
import MoonLoader from "react-spinners/MoonLoader";

function LoadingSpinner() {
    return (
        <div style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
        }}>
            <MoonLoader
                color="white"
                loading={true}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoadingSpinner
