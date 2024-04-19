import express from "express"
import { addNote, updateNote } from "./notes.controller.js"

const notesRouter = express.Router()
notesRouter.post("/addNote", addNote)
notesRouter.put("/updateNote", updateNote)

export default notesRouter