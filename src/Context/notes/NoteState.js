import React from "react";
import { useState } from "react";
// import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async () => {
    //Todo API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMmI5NzdmOTJmZTQ0ZmJjZTE1Yzk3In0sImlhdCI6MTY2MDE0OTg3Mn0.a6BMOrvn48GTcKWFeyozMEcRfwe_zLN66GjCHPdNw64",
      },
    });
    const json = await response.json();
    // console.log(json)
    setNotes(json)

  };

  // Add a note
  const addNote = async (title, description, tag) => {
    //Todo API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMmI5NzdmOTJmZTQ0ZmJjZTE1Yzk3In0sImlhdCI6MTY2MDE0OTg3Mn0.a6BMOrvn48GTcKWFeyozMEcRfwe_zLN66GjCHPdNw64",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json()
    console.log(json)

    console.log("Adding a new note");
    const note = [
      {
        _id: "62fa8d29a2784dfae799ee23",
        user: "62f2b977f92fe44fbce15c97",
        title: title,
        description: description,
        tag: tag,
        date: "2022-08-15T18:15:05.937Z",
        __v: 0,
      },
    ];
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMmI5NzdmOTJmZTQ0ZmJjZTE1Yzk3In0sImlhdCI6MTY2MDE0OTg3Mn0.a6BMOrvn48GTcKWFeyozMEcRfwe_zLN66GjCHPdNw64",
      },
    });
    const json = response.json();
    console.log(json)

    console.log("Deleting note of id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMmI5NzdmOTJmZTQ0ZmJjZTE1Yzk3In0sImlhdCI6MTY2MDE0OTg3Mn0.a6BMOrvn48GTcKWFeyozMEcRfwe_zLN66GjCHPdNw64",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit a note
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    console.log(id, newNotes)
    setNotes(newNotes)
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
