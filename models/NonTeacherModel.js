import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const NonTeacherSchema =   new Schema( {
    _id: String,
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    address: {
        type: String
     },
    class:{ 
        type: String,
        
    },
    role: {
        type: String,
        default: "NonTeacher"
    },
    telephone: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    nextofKin_ID: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    profileUrl: String,
    NonTeacherID : String,
    date: { 
        type: Date, 
        default: Date.now
    },
})

export default  mongoose.model("nonTeachers", NonTeacherSchema, "accounts");