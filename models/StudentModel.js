import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const StudentSchema =   new Schema( {
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
        type: String,
        required: true
    },
    courses: {
        type: [
            {
                courseID : String
            }
        ]
    },
    nextofKin_ID: {
        type: String
    },
    profileUrl: String,
    studentID : String,
    date: { 
        type: Date, 
        default: Date.now
    },
})

export default  mongoose.model("students", StudentSchema, "accounts");