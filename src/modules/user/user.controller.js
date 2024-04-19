import { userModel } from "../../../models/user.model.js"
import bcrypt from "bcrypt";
  /*  ***
  * find =>[]
  *findOne =>{} | null
  *findById()
  */
const signUp = async (req, res) => { 
    const {name , email, password, age} = req.body  
    /*  await userModel.findOne({email}) */


   const user = await userModel.findOne({email}) 
   if(user){
    return res.json({Message:"User Already Exist"})

    
   }else{
    const hash = bcrypt.hashSync(password, 8)
    await userModel.insertMany({name, email, password:hash, age})
    res.json({Message:"Success"})
   }

 }

 const signIn = async (req, res) => { 
  const { email, password} = req.body  

  const user = await userModel.findOne({email}) 

  if( user  && bcrypt.compareSync(password, user.password)){
    // check password
    
    res.json({Message:"Login with token"})
  }else{
    res.json({message:"User not found or Password incorrect"})
  }


 
 }

 export {
  signUp , signIn
} 