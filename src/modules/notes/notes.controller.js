
import { notesModel } from './../../../models/note.model.js';


const addNote = async (req, res) => { 
  const {title, desc, createdById} = req.body
  await notesModel.insertMany({title, desc, createdById})
  res.json({Message:"Success"})
 }

 /**
  * 1 updateOne()
  * 2 updateMany()
  * 3 replaceOne()
  * 4 findByIdAndUpdate()
  * 5 findOneAndReplace()
  * 6 findOneAndUpdate()
  * @param {*} req 
  * @param {*} res 
  */
 const updateNote = async (req, res) => { 
  const {title, desc, id} = req.body
  notesModel.updateOne({}) 
  res.json({Message:"Success"})
  }

 export {addNote, updateNote}