const {Product} = require('../model/user')
const express = require('express')
const router=express.Router()

router.post('/users', async(req,res)=>{
    const data =await User.create(req.body)
})

router.get('/users/:id', async(req,res)=>{
    console.log(req.body)
    console.log(req.params)

})

router.delete('/users/:id',async(res,req)=>{
    const data=await User.findByAndUpdate(res.param.id)
})

router.put('/chnage-pass/:id',async(res,req)=>{
    const data=await User.findByAndUpdate(res.param.id)
})

module.exports=router