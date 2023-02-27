const express = require("express")
const app=express()
const mongoose = require("mongoose")
const Usermodel=require("./modles/users")
const cors = require('cors');   
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://alialhomsi:Lolllol231@cluster0.fpab7e5.mongodb.net/mongodb?retryWrites=true&w=majority")

app.get("/getUsers",(req, res)=>{
    Usermodel.find({}, (err ,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
})
app.post("/createUser",async (req,res)=>{
    const user = req.body
    const newUser =new Usermodel(user)
    await newUser.save()
    res.json(user)
    
})
app.delete('/deleteUser', (req, res) => {
    res.send("DELETE Request Called")
  })
   
  


app.listen(3001, () => {
    console.log("Server OKAY");
  });