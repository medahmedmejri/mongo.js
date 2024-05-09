const  {Router}=require('express');
const {getusers,getoneusers}=require('../controller/index.js');
const router=Router();



router.get("/users",getusers);
router.get("/user/:id",getoneusers);

module.exports=router
