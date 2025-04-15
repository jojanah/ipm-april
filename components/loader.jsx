import React, { useEffect, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
export default function Loader({ isLoading }) {
    const override = {
        display: "block",
        margin: "40vh 40%",
        borderColor: "#0094ff",
    };
    return (<>
        {isLoading ? <div className='loader-container'>
            <ClipLoader loading={true} cssOverride={override} size={150} ></ClipLoader>
        </div> : null}

    </>)
}