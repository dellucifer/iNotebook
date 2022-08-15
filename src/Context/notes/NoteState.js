import React from "react";
// import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{

    return(
        <noteContext.Provider value={{}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;