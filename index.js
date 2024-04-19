import express from "express"
import mongoose from "mongoose";
import dbConnections from "./databases/dbConnections.js";
import userRouter from "./src/modules/user/user.routes.js";
import notesRouter from "./src/modules/notes/notes.routes.js";
const app = express()
const port = 4000;

app.get("/", (req, res)=>{
  res.send('hello world')
})
app.use(express.json())
app.use(userRouter)
app.use(notesRouter)
dbConnections()

app.listen(port, ()=>{ console.log(`Example app listening on port, ${port}`);})

