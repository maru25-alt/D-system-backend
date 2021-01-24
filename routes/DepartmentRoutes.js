import express from "express";
import DepartmentsModel from "../models/DepartmentsModel.js";
import {createDepart} from '../middlewares/validate.js'
import {stringtoLowerCase} from '../middlewares/utils.js';
const route = express.Router();

route.get('/', async(req, res) => {
    const data = await DepartmentsModel.find();
    res.json(data);
})


//create
route.post('/create', async(req, res) => {
    let body = req.body
   const {error} = createDepart.validate(body);
    if(error){
    return  res.json({success: false, error : error.details[0].message})
    }

    body = {
      ...body,
      name: stringtoLowerCase(body.name)
    }
    const departExist = await DepartmentsModel.findOne({
        name: body.name,
    })
    if(departExist){
        return res.json({success: false, error: "Department already exist"})
    }

    DepartmentsModel.create(body)
    .then(doc => {
        console.log(doc)
        res.json({success: true, doc});
      })
    .catch(err => {
        res.json({success: false, message:err})
    })
  });


//edit
route.put('/update/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
    
   DepartmentsModel.findOneAndUpdate({
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
route.delete('/delete/id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
   DepartmentsModel.findOneAndRemove({
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