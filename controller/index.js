const{user}=require('../module/index.js');

const getusers= async(req,res)=>{
try{
const users= await  user.find();
res.status(200).json(users);
}
catch(error){
    console.error('error in get  users',error);
    res.status(500)
}
}

const getoneusers= async(req,res)=>{
    try{
  const  oneuser= await user.findById(req.params.id).exec();
  res.status(200).json(oneuser);
    }
    catch(error){
        console.error('error in get  users',error);
        res.status(500);

    }
}



module.exports={getusers,getoneusers}

