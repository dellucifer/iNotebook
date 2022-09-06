import React from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NoteItem = (props) => {
  const context = useContext(noteContext)
  const {deleteNote} = context
  const { note, updateNote, showAlert} = props;
  // var FontAwesome = require('react-fontawesome');
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
          <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); showAlert("Note Deleted", "success")}}></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
