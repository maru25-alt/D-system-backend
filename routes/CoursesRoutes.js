import express from "express";
import CoursesModel from "../models/CoursesModel.js";
import {createCourse} from '../middlewares/validate.js';
import {stringtoLowerCase} from '../middlewares/utils.js';

const route = express.Router();

route.get('/', async(req, res) => {
    const ads = await CoursesModel.find();
    res.json(ads);
})

//create
route.post('/create', async(req, res) => {
    let body = req.body
   const {error} = createCourse.validate(body);
    if(error){
        console.log(error)
    return  res.json({success: false, error : error.details[0].message})
    }
    body = {
      ...body,
      name: stringtoLowerCase(body.name)
    }

    const departExist = await CoursesModel.findOne({
        name: body.name,
    })
    if(departExist){
        return res.json({success: false, error: "Course already exist"})
    }

    CoursesModel.create(body)
    .then(doc => {
        console.log(doc)
        res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
        res.json({success: false, message:err})
    })
  });


//edit
route.put('/update/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
    
  CoursesModel.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
          return res.json({success: false, error: "doex not exists"})
       }
        return res.json({success: true, doc});
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
  CoursesModel.findOneAndRemove({
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