import express from "express";
import NextkinModel from "../models/NextofKinModel.js";
import {createnextKin} from '../middlewares/validate.js'
import { stringSpace, stringtoLowerCaseSpace } from "../middlewares/utils.js";

const route = express.Router();

route.get('/', async(req, res) => {
    const data = await NextkinModel.find();
    res.json(data);
})

//create
route.post('/create', async(req, res) => {
    let body = req.body
   const {error} = createnextKin.validate(body);
    if(error){
        console.log(error)
      return  res.json({success: false, error : error.details[0].message})
    }
    body = {
      ...body,
      name: stringtoLowerCaseSpace(body?.name),
      surname: stringtoLowerCaseSpace(body?.surname),
      email: stringSpace(body?.email),
    }

    const kinExist = await NextkinModel.findOne({
        name: body.name,
    })
    if(kinExist){
        return res.json({success: false, error: "Course already exist"})
    }

    NextkinModel.create(body)
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
  NextkinModel.findOneAndUpdate({
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
  NextkinModel.findOneAndRemove({
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