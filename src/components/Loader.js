import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
function Loader() {
    return (
        <div>
            <ClipLoader
                size={250}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader
