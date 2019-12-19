const express = require("express");
const app = express();

const getMessage = require('../router/router');

function log_commin(req,res,next){
    console.log('请求来了……')
    next()
}

function first_message(req,res,next){
    let {name} = req.query;
    if(!name || !name.length){
        res.json({
            method:'没有name值'
        })
    }else{
        next()
    }
}

app.use(log_commin)
// app.use('*',first_message)
app.use(express.static('static',{}))
app.use('/user',getMessage)
app.get('/demo',(req,res)=>{
    res.json({
        method:'demo'
    })
})

app.listen(3000,()=>{
    console.log('server启动成功')
})