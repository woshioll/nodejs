let express = require('express');
let router = express.Router();

router.get('/list',(req,res)=>{
    res.json({
        id:123,
        name:'张三',
    })
})

module.exports = router;