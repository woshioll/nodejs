const express = require("express");
const app = express();

const routerName = require('./routerName')
const routerSku = require('./routerSku')

app.use('/name',routerName)
app.use('/sku',routerSku)

// //响应所有方式
// app.all('/demo',(req,res)=>{
//     res.json({
//         name:'123',
//         method:req.method
//     })
// })

// //响应所有path
// app.all('/*',(req,res)=>{
//     res.json({
//         name:'123',
//         method:req.method,
//         path:req.path
//     })
// })

// // 使用use
// app.use((req,res)=>{
//     res.json({
//         name:'123',
//         method:req.method,
//         path:req.path
//     })
// })
// app.use('/init',(req,res)=>{
//     res.json({
//         name:'456',
//         method:req.method,
//         path:req.path
//     })
// })

app.listen(3000,()=>{
    console.log('server启动成功')
})