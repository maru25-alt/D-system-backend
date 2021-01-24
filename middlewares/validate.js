import Joi from '@hapi/joi'

export const create = Joi.object({
    name: Joi.string().min(3).required(),
    surname: Joi.string().min(3).required(),
    email: Joi.string().email(),
    gender: Joi.string(),
    role: Joi.string().required(),
    telephone: Joi.string(),
    classID: Joi.string(),
    positions: Joi.array(),
    address: Joi.string(),
    courses: Joi.array(),
    classes: Joi.array(),
    nextofKin_ID: Joi.string(),
    profileUrl: Joi.string(),
})

export const login = Joi.object({
    userID: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required()
})


export const changePassword = Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required()
})


export const createDepart = Joi.object({
    headTeacher: Joi.string(),
    name: Joi.string().required(),
    office: Joi.string()
})

export const createCourse = Joi.object({
    name: Joi.string().required(),
    teachers: Joi.array()
})

export const createClass = Joi.object({
    name: Joi.string().required(),
    teacherID: Joi.string(),
    repID: Joi.string(),
})

export const createnextKin = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    address: Joi.string(),
    telephone: Joi.string(),
    occupation: Joi.string(),
    email: Joi.string(),
    relationship: Joi.string(),
    gender: Joi.string()
   
})

export const startAttendance = Joi.object({
    startTime : Joi.string(),
    startLocation: Joi.string().required()
})

export const endAttendance = Joi.object({
     endTime: Joi.string(),
     endLocation: Joi.string().required()
})

export const createTask = Joi.object({
   deadline: Joi.string(),
   score: Joi.string(),
   teacherID: Joi.string(),
   classID: Joi.string(),
   courseID: Joi.string(),
   taskData: Joi.string().required()
})

export const createFile = Joi.object({
    filename: Joi.string(),
    courseID: Joi.string(),
    senderID: Joi.string(),
    fileData:  Joi.string()
})

export const results = Joi.object({
    studentID: Joi.string(),
    courseID: Joi.string(),
    score: Joi.string(),
    total: Joi.string(),
    teacherID: Joi.string(),
})

export const sendFriendRequest = Joi.object({
    acceptor_id: Joi.string().required(),
    requestor_id: Joi.string().required()
})

export const sendMessage = Joi.object({
    message: Joi.string().required(),
    senderID: Joi.string().required()
})