import React from "react";
import { useState } from "react";
// import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62fa8d21a2784dfae799ee27",
      user: "62f2b977f92fe44fbce15c97",
      title: "First Title",
      description: "First Description",
      tag: "testing",
      date: "2022-08-15T18:14:57.288Z",
      __v: 0,
    },
    {
      _id: "62fa8d29a2784dfae799ee28",
      user: "62f2b977f92fe44fbce15c97",
      title: "Second Title",
      description: "Second Description",
      tag: "testing",
      date: "2022-08-15T18:15:05.937Z",
      __v: 0,
    },
    {
      _id: "62fa8d21a2784dfae799ee24",
      user: "62f2b977f92fe44fbce15c97",
      title: "First Title",
      description: "First Description",
      tag: "testing",
      date: "2022-08-15T18:14:57.288Z",
      __v: 0,
    },
    {
      _id: "62fa8d29a2784dfae799ee25",
      user: "62f2b977f92fe44fbce15c97",
      title: "Second Title",
      description: "Second Description",
      tag: "testing",
      date: "2022-08-15T18:15:05.937Z",
      __v: 0,
    },
    {
      _id: "62fa8d21a2784dfae799ee20",
      user: "62f2b977f92fe44fbce15c97",
      title: "First Title",
      description: "First Description",
      tag: "testing",
      date: "2022-08-15T18:14:57.288Z",
      __v: 0,
    },
    {
      _id: "62fa8d29a2784dfae799ee23",
      user: "62f2b977f92fe44fbce15c97",
      title: "Second Title",
      description: "Second Description",
      tag: "testing",
      date: "2022-08-15T18:15:05.937Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tag) => {
    //Todo API call
    var note = {
      _id: "62fa8d29a2784dfae799ee23",
      user: "62f2b977f92fe44fbce15c97",
      title: "Added Title",
      description: "Added Description",
      tag: "Added",
      date: "2022-08-15T18:15:05.937Z",
      __v: 0,
    }
    setNotes(note.push(note))
  };

  // Delete a note
  const deleteNote = (id) => {

  };

  // Edit a note
  const editNote = (id) => {

  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
