const express = require('express');
const router = express.Router();

function getVal(req,res,next){
    let {name,passworld} = req.query;
    req.formdata = {
        name,passworld
    }
    next()
}


router.get('/getMessage',[getVal],(req,res)=>{
    let {formdata} = req;
    res.json({
        formdata,
        message:'getMessage'
    })
})

module.exports=router;