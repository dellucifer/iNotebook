import React from "react";
import { useState } from "react";
// import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "62fa8d21a2784dfae799ee27",
          "user": "62f2b977f92fe44fbce15c97",
          "title": "First Title",
          "description": "First Description",
          "tag": "testing",
          "date": "2022-08-15T18:14:57.288Z",
          "__v": 0
        },
        {
          "_id": "62fa8d29a2784dfae799ee29",
          "user": "62f2b977f92fe44fbce15c97",
          "title": "Second Title",
          "description": "Second Description",
          "tag": "testing",
          "date": "2022-08-15T18:15:05.937Z",
          "__v": 0
        },
        {
          "_id": "62fa8d21a2784dfae799ee27",
          "user": "62f2b977f92fe44fbce15c97",
          "title": "First Title",
          "description": "First Description",
          "tag": "testing",
          "date": "2022-08-15T18:14:57.288Z",
          "__v": 0
        },
        {
          "_id": "62fa8d29a2784dfae799ee29",
          "user": "62f2b977f92fe44fbce15c97",
          "title": "Second Title",
          "description": "Second Description",
          "tag": "testing",
          "date": "2022-08-15T18:15:05.937Z",
          "__v": 0
        },{
          "_id": "62fa8d21a2784dfae799ee27",
          "user": "62f2b977f92fe44fbce15c97",
          "title": "First Title",
          "description": "First Description",
          "tag": "testing",
          "date": "2022-08-15T18:14:57.288Z",
          "__v": 0
        },
        {
          "_id": "62fa8d29a2784dfae799ee29",
          "user": "62f2b977f92fe44fbce15c97",
          "title": "Second Title",
          "description": "Second Description",
          "tag": "testing",
          "date": "2022-08-15T18:15:05.937Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;