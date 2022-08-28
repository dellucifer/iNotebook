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
    console.log('Adding a new note')
    const note = [{
      _id: "62fa8d29a2784dfae799ee23",
      user: "62f2b977f92fe44fbce15c97",
      title: title,
      description: description,
      tag: "default",
      date: "2022-08-15T18:15:05.937Z",
      __v: 0,
    }]
    setNotes(notes.concat(note))
  };

  // Delete a note
  const deleteNote = (id) => {
    console.log('Deleting note of id'+id)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
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
