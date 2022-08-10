const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//Route 1: Fetch all notes using: GET "/api/notes/fetchallnotes" Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

//Route 2: Add a new note: POST "/api/notes/addnote" Login Required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be of atleast 5 characters").isLength(
      {
        min: 5,
      }
    ),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //If error exists, then return bad request and error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: Update an existing note: POST "/api/notes/updatenote" Login Required
router.put(
    "/updatenote/:id",
    fetchuser,
    [
      body("title", "Enter a valid title").isLength({ min: 3 }),
      body("description", "Description must be of atleast 5 characters").isLength(
        {
          min: 5,
        }
      ),
    ],
    async (req, res) => {
        const { title, description, tag } = req.body

        //Create a new note object
        const newNote = {}
        if(title){newNote.title = title}
        if(description){newNote.description = description}
        if(tag){newNote.tag = tag}

        //Find the note to be updated and update it
        let note = await Note.findById(req.params.id)
        if(!note){
            return res.status(404).send("Not Found")
        }

        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
        res.json(note)

    })

module.exports = router;
