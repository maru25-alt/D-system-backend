import express from "express";
import Results from "../models/ResultsModel.js";
import {results} from '../middlewares/validate.js'
import ResultsModel from "../models/ResultsModel.js";

const route = express.Router();

route.get('/', async(req, res) => {
    const data = await Results.find();
    res.json(data);
})

//create 
route.post('/create', async(req, res) => {
    let body = req.body
   const {error} = results.validate(body);
    if(error){
        console.log(error)
    return  res.json({success: false, error : error.details[0].message})
    }
  
    ResultsModel.create(body)
    .then(doc => {
        res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
        res.json({success: false, message:err})
    })
  });






//edit task
route.put('/update/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 
  ResultsModel.findOneAndUpdate({
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



//delete task
route.delete('/delete/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
  ResultsModel.findOneAndRemove({
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