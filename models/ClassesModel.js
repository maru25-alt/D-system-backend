import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const ClassesSchema =   new Schema( {
    name: {
        type: String,
        required: true
    },
    teacherID: String,
    repID: String,
    date: {
        type: Date,
        default: Date.now
    } 
})

export default  mongoose.model("classes", ClassesSchema);