const express = require('express');
const cors = require('cors');
const UserModel = require('./models/Users')

const app = express();
const port = 6001;

app.use(cors());
app.use(express.json());


// MongoDb config
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vishalpukale:Vishal123@genaitech.6j4hu.mongodb.net/?retryWrites=true&w=majority&appName=GenaiTech");

app.post("/createUser", (req, res)=>{
    UserModel.create(req.body)
    .then(users=> res.json(users)) 
    .catch(err=> res.json(err))
})

app.get('/', (req, res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.get('/getUser/:id', (req, res)=>{
    const {id} = req.params;
    UserModel.findById(id)
    .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.put('/updateUser/:id', (req, res)=>{
    const {id} = req.params;
    UserModel.findByIdAndUpdate(id, {name: req.body.name, phone: req.body.phone, mail: req.body.mail, age:req.body.age})
    .then(user => res.json(user))
    .catch(err=> res.status(400).json(err))
})

app.delete('/deleteUser/:id', (req, res)=>{
    const {id} = req.params;
    UserModel.findByIdAndDelete(id)
    .then(user => res.json(user))
    .catch(err=> res.status(400).json(err))
})

app.listen(port, ()=> {
    console.log(`App Listening on port ${port}`);
})