import React, { useContext } from 'react'
import { useState } from 'react';
import noteContext from "../Context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title: "",description: "", tag: ""})

  const handleClick = (e)=>{
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote({title: "",description: "", tag: ""})
    props.showAlert("Note Added", "success")
  }

  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <div className="conatiner mx-5">
          <h2 className="my-4">Add Note</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name='title'
                aria-describedby="emailHelp"
                onChange={onChange}
                required
                minLength={5}
                value={note.title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name='description'
                onChange={onChange}
                required
                minLength={5}
                value={note.description}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name='tag'
                onChange={onChange}
                required
                minLength={2}
                value={note.tag}
              />
            </div>
            <button disabled={note.title.length<5 || note.description.length<5 || note.tag.length<2} type="submit" className="btn btn-primary" onClick={handleClick}>
              Submit
            </button>
          </form>
        </div>
    </div>
  )
}

export default AddNote
