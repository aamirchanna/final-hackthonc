import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper function to handle errors
import { hashpassword } from "../helpers/authHelpers.js"

const registerCantroller  = async (req, res)=>{


try {
    const {name,email,password,address} = req.body
    //validation
    if(!name || !email || !password || !address)
        return res.send(error,'please fill all the fields')

   //existing users check
   const existingUser = await userModel.findOne({email})

   //existing user
   if(existingUser){
       res.status(200).send({
           success: true,
           message: 'already resgistered please login'
       })
   };

   //register user
   const hashedPassword = await hashpassword(password)
   //save
   const user = await new userModel({name,email,password:hashedPassword,address}).save()
   res.status(201).send({
       success: true,
       message: 'registerd successfully',
       user
   })

   
} catch (error) {
   console.log('error in authcCantroller',error)
 res.status(500).send({
   success: false,
   message : 'error in registration',
   error
 })

}
}
export default registerCantroller;