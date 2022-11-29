const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const sub = require('./subjectModel')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hii")
})

app.post("/addSub",async(req,res)=>{
    const data = new sub(req.body)
    data.save()
    res.redirect('http://localhost:3000/courseDetails')

})

app.get('/showSub',async(req,res)=>{
    sub.find()
    .then((data)=>{
        res.json(data)
    })
    
})

app.post('/updateSub',async(req,res)=>{
    sub.findOneAndUpdate({name:req.body.name},{faculty:req.body.faculty})
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
    res.redirect('http://localhost:3000/courseDetails')

})

app.post('/updateCourse',async(req,res)=>{
    sub.findOneAndUpdate({name:req.body.name},{cDur:req.body.cDur,evalIns:req.body.evalIns})
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
    res.redirect('http://localhost:3000/courseDetails')
})


app.listen(2000,()=>{
    console.log("Server is listening on 2000");
    mongoose.connect("mongodb://localhost:27017/cms")
    .then(()=>{
        console.log("Database connected")
    })
})