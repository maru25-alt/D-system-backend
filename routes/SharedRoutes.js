import express from "express";
import {uploader} from '../middlewares/multer.js'

const route = express.Router();

route.get('/', async(req, res) => {
   res.send('shared rotes')
})

route.post('/upload/', uploader.single('photo') ,(req , res) => {
    try {
      console.log(req.body.caption)
      res.send({path: `${req.file.filename}`});
    } catch (err) {
      console.log(err)
      res.json({success: false, message:err});
    }
})


export default route;