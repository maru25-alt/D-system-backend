import express from "express";
import TeacherModel from "../models/TeacherModel.js";
import {create, login} from  '../middlewares/validate.js';
import  bcrypt from 'bcrypt';
import {stringtoLowerCaseSpace, stringSpace} from '../middlewares/utils.js';
import {role} from '../middlewares/variables.js';

const route = express.Router();

//all teachers
route.get('/', async(req, res) => {
    const data = await TeacherModel.find({role: role.Teacher});
    res.json(data);
})


//get one teacher by id
route.get('/:id', async(req, res) => {
    if(!req.params.id) {
        return res.status(400).send('Missing URL parameter: username')
      }
    await TeacherModel.findOne({ _id: req.params.id })
    .then(user => {
        if(user){
        return  res.json({success: true, teacher: user})
        }
        else{
        return  res.json({success: false, error: 'Student does not exists'})
        }
    })
    .catch(err => {
        return res.json({success: false, error: "Server error"})
    });
})

//create
route.post('/create', async(req , res) => {
    let body = req.body
     const {error} = create.validate(body);
    if(error){
      return  res.json({success: false, error : error.details[0].message})
     }

     body = {
      ...body,
      name: stringtoLowerCaseSpace(body?.name),
      surname: stringtoLowerCaseSpace(body?.surname),
      email: stringSpace(body?.email),
      role: stringtoLowerCaseSpace(role.Teacher),
      gender: stringtoLowerCaseSpace(body?.gender),
      telephone: stringSpace(body?.telephone)
    }
     const teacherExist = await TeacherModel.findOne({
          email: body.email,
          name: body.name,
          surname: body.surname
      })
      if(teacherExist){
          return res.json({success: false, error: "Teacher Already exists"})
      }
  
      //calculate teacher
      const currentYear = new Date().getFullYear();
      const number = await TeacherModel.countDocuments({role: role.Teacher});
      let teacherId = 'TK' + currentYear + (number + 1)
      console.log(number)
  
      bcrypt.hash(teacherId, 10, (err, hash) => {
            if(err){
                console.log(err, "err")
              return   res.json({success: false, error: "something went wrong"})
            }
            const userData = {
                ...body,
                password: hash,
                teacherID: teacherId
            }
            TeacherModel.create(userData).then(user => {
            return  res.json({success: true,teacher: user})
           }).catch(e => {
               console.log(e, "e")
             return   res.json({success: false, error: "something went wrong"})
           })
       })
  
  
  })
  

  //login
route.post('/signin', async(req, res) => {
    const {error} = login.validate(req.body);
    if(error){
     return   res.send({ error: error.details[0].message})
    }
    TeacherModel.findOne({
      teacherID: req.body.teacherID,
      role: stringtoLowerCaseSpace(req.body.role)
      }).then((user) => {
       if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
             return  res.json({success: true, user})
          } 
          else {
             return res.json({ error: 'Wrong Password or Teacher ID' })
          }
      } 
      else {
         return res.json({ error: 'Wrong Password or Teacher ID' })
      }
    }).catch(err => {
      console.log(err)
    })
  
  })
  

  //change password
route.post('/changePassword/:id', async(req, res )=> {
  const {error} = changePassword.validate(req.body);
  if(error) {
      return  res.json({success: false, error : error.details[0].message})
  }

  TeacherModel.findOne({_id:  req.params.id}).then(user => {
    if(user){
      if (bcrypt.compareSync(req.body.oldPassword, user.password)){
            bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
              if(err){
                console.log("err")
                return res.json( { success: false, message: err })
              }
              TeacherModel.findOneAndUpdate({
                _id: req.params.id
              },{password: hash}, {
                   new: true
              })
              .then(doc => {
                   return res.json({success: true, user: doc})
                })
              .catch(e => {
                console.log("e")
                  return res.json( { success: false, message: e + "e"})
              })
          })  
      }
      else{
          return res.json( { success: false, message: "Wrong old password"})
      }
    }
    else{
      return res.json({success: false, message: "Teacher does not exist"})
    }
  })
})
  
//edit
route.put('/update/:id', (req, res) => {
  if(!req.params.id) {
    return res.status(400).send('Missing URL parameter: username')
  } 
TeacherModel.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  })
  .then(doc => {
      console.log(doc)
      res.json({success: true, doc});
    })
  .catch(err => {
      res.json({success: false, message:err})
  })

});

//delete
route.delete('/delete/:id', (req, res) => {
  if(!req.params.id) {
    return res.status(400).send('Missing URL parameter: username')
  }
TeacherModel.findOneAndRemove({
    _id: req.params.id
  })
  .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})





export default route;