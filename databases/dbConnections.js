import mongoose from "mongoose";
export default  function dbConnection(){
  mongoose.connect("mongodb://0.0.0.0:27017/blogDB")
.then(()=>{
  console.log("Database connection established");
}).catch((err)=>{
 console.error(" database error" + err);
})
}
