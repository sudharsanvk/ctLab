const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema(
    {
        name:String,
        dept:String,
        subject:[string]
    }
)

module.exports = mongoose.model("subjects",subjectSchema)