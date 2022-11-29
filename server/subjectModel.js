const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema(
    {
        name:String,
        dept:String,
        cDur:String,
        evalIns:String,
        faculty:String
    }
)

module.exports = mongoose.model("subjects",subjectSchema)