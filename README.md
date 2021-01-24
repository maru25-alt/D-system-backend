# D-system-backend

api paths
API PATH : http://localhost:5000/api/

# STUDENTS

1.  create student
    METHOD: POST
    PATH : '/students/create'
    BODY: {
    name : String
    surname: String
    email: String
    address: String
    gender: String
    telephone: String,
    classID: String,
    courses: Array [{ courseID: String}]
    nextofKinID: String
    profileUrl: String
    }
    RESPONSE: [
    //404
    {
    success: false
    error: string
    }
    //201
    {
    success: true
    student: Object
    }
    ]

2.  signin
    METHOD: POST
    PATH: '/students/signin'
    BODY: {
    password: String
    studentID: String
    }
    RESPONSE: [
    //404
    {
    success: false
    error: string
    }
    //201
    {
    success: true
    student: Object
    }
    ]

3.  delete
    METHOD: DELETE
    PATH: '/delete/:id'
    PARAMS: id -> studentID

4.  change password
    METHOD: PUT
    PATH: '/changePassword/:id'
    PARAMS: id -> studentID

5.  edit
    METHOD: PUT
    PATH: '/update/:id'
    PARAMS: id -> studentID
    BODY: {
    name : String
    surname: String
    email: String
    address: String
    gender: String
    telephone: String,
    classID: String,
    courses: Array [{ courseID: String}]
    nextofKinID: String
    profileUrl: String

            //any of the above

    }

6.  get all students
    METHOD: GET
    PATH: '/students'

# TEACHERS

1.  create teacher
    METHOD: POST
    PATH : '/teachers/create'
    BODY: {
    name : String
    surname: String
    email: String
    address: String
    gender: String
    telephone: String,
    classID: String,
    courses: Array [{ courseID: String}]
    nextofKinID: String
    profileUrl: String
    }

2.  signin
    METHOD: POST
    PATH: '/students/signin'
    BODY: {
    password: String
    studentID: String
    }

3.  delete
    METHOD: DELETE
    PATH: '/delete/:id'
    PARAMS: id -> studentID

4.  change password
    METHOD: PUT
    PATH: '/changePassword/:id'
    PARAMS: id -> studentID

5.  edit
    METHOD: PUT
    PATH: '/update/:id'
    PARAMS: id -> studentID
    BODY: {
    name : String
    surname: String
    email: String
    address: String
    gender: String
    telephone: String,
    classID: String,
    courses: Array [{ courseID: String}]
    nextofKinID: String
    profileUrl: String

            //any of the above

    }

# NONTEACHERS

# COURSES

# CLASSES

# DEPARTMENTS

# ATTENDENCE

# CHAT

# FILES

# NEXTOFKIN

# NOTIFICATION

# RESULTS

# TASK

# TIMETABLE
