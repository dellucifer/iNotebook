import React from "react";
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const s1 = {
        "name": "Del",
        "class": "GEC"
    }

    const [state, setState] = useState(s1)
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Priyanshu",
                "class": "Electronics"
            })
        }, 2000);
    }

    return(
        <noteContext.Provider value={{state, update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;