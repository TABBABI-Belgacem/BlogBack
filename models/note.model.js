import mongoose from "mongoose"

const notesSchema = mongoose.Schema({
  title:String,
  desc:String,
  createdById:mongoose.SchemaTypes.ObjectId,
})

export const notesModel = mongoose.model("note", notesSchema)