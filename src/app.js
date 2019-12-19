const express = require("express");
const app = express();

// app.use((req,res)=>{
//     res.json({
//         name:'张三'
//     })
// })

app.get('/name/:age',(req,res)=>{
    let {age} = req.params;
    res.json({
        name:'tom',
        age:age
    })
})
app.get('/name',(req,res)=>{
    res.send('get message')
})
app.post('/name',(req,res)=>{
    res.send('post message')
})

app.listen(3000,()=>{
    console.log('server启动成功')
})