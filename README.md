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

7.  get student by id
    METHOD: GET
    PATH: '/students/student/id'
    PARAMS: id -> studentID
    RESPONSE: [
    //404
    {
    success: false
    error: string
    }
    //201
    {
    success: true
    student: object
    }
    ]

8.  get students in a class
    METHOD: GET
    PATH: '/students/class/id'
    PARAMS: id -> studentID
    RESPONSE: [
    //404
    {
    success: false
    error: string
    }
    //201
    {
    success: true
    students: object
    }
    ]

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
     RESPONSE: [
    //404
    {
    success: false
    error: string
    }
    //201
    {
    success: true
    teacher: Object // new value
    }
    ]


6. get all teachers
  METHOD: GET
    PATH: '/teachers'
    RESPONSE: [
    //404
    {
    success: false
    error: string
    }
    //201
    {
    data: Array
    }
    ]

7. get teacher by id
     METHOD: GET
    PATH: '/teachers/id'
    PARAMS: id -> teacherID
    RESPONSE: [
    //404
    {
    success: false
    error: string
    }
    //201
    {
    success: true
    student: object
    }
    ]
# NONTEACHERS

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
