import React from "react";
import {useNavigate} from "react-router-dom";


function Error() {
    let nav = useNavigate();
    return(<>
    <h1>Page Not found.</h1>
    <button onClick={()=>nav("/") } >Go back</button>
    </>);
}

export default Error;