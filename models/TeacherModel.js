import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const TeacherSchema =   new Schema( {
    _id: String,
    teacherID: String,
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
        default: "Teacher"
    },
    positions: {
        type: [{
            position: String,
            department: String,
            date: {
                type: Date,
                default: Date.now
            }
        }],
        default: []
    },
    telephone: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    classes: {
        type: [{
            classID: String,
            startdate: {
                type: Date,
                default: Date.now
            }
        }],
        default: []

    },
    courses: {
        type: [
        {
            courseID : String,
            classID: String,
            startDate: {
                type: Date,
                default: Date.now
            }
         }
      ] ,
      default: []
    },
    nextofKinID: {
        type: String
    },
    profileUrl: String,
    date: { 
        type: Date, 
        default: Date.now
    },
})

export default  mongoose.model("teachers", TeacherSchema, "accounts");