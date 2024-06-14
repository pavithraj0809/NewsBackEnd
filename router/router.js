const express=require("express")
const router=express.Router();
const{postData,getData,updateData,deleteData}=require('../controller/user')
router.get('/get',getData);
router.post('/post',postData);
router.put('/put/:id',updateData);
router.delete('/delete/:id',deleteData);
module.exports=router;