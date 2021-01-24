import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const StudentSchema =   new Schema( {
    studentID:{
        type: String,
        required: true
    },
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
     gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "student"
    },
    telephone: {
        type: String
    },
    classID: {
        type: String
    },
    courses: {
        type: [
            {
                courseID : String
            }
        ]
    },
    nextofKinID: {
        type: String
    },
    profileUrl: String,
    grade: String,
    date: { 
        type: Date, 
        default: Date.now
    },
})

export default  mongoose.model("students", StudentSchema, "accounts");