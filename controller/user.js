const userModal=require('../modal/user')
const postData=async(req,res)=>{
    try{
        const localvar=new userModal({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile,
            category:req.body.category
        });
        const saveData= await localvar.save();
        res.status(200).json({message:"UserData Posted",data:saveData});

    }catch(error){
        res.status(500).json({
            message:error.message
        })

    }
}

const getData=async(req,res)=>{
    try{
        const getData=await userModal.find();
        res.status(200).json(getData)

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const updateData=async(req,res)=>{
    try{
        const getid=req.params.id;
        const updateData=await userModal.findByIdAndUpdate({_id:getid},
            {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile,
            category:req.body.category
        },
        {
          new:true
        })
        res.status(200).json({message:"UserData Updated",data:updateData});


    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const deleteData=async(req,res)=>{
    try{
        const getid=req.params.id;
        const deleteData=await userModal.findByIdAndDelete({_id:getid})
        res.status(200).json({
            message:"Delete Data SuccessFully"
        })

    }catch(error){
        res.status(500).json({
            message:error.message


        })
    }
}


module.exports={postData,getData,updateData,deleteData}