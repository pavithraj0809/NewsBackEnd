const newsModal=require('../modal/news');
const postData=async(req,res)=>{
    try{
        const localVar=new newsModal({
            heading:req.body.heading,
            content:req.body.content,
            author: req.body.author,
            category: req.body.category,
            image: req.file ? req.file.path.replace('public','') : null
        })
        const saveData=await localVar.save();
        res.status(200).json({message:"News Posted",data:saveData});

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}
const getData=async(req,res)=>{
    try{
        const getData= await newsModal.find()
        res.status(200).json(getData)

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}

const updateData=async(req,res)=>{
    try{
        const getId=req.params.id;
        console.log(getId)
        console.log(req.body)
        const updateData=await newsModal.findByIdAndUpdate({_id:getId},
            {
                heading:req.body.heading,
                content:req.body.content,
                author: req.body.author,
                category: req.body.category,
                image: req.file ? req.file.path.replace('public','') : null
        },{
            new:true
        })
        console.log(updateData)
        res.status(200).json({message:"News Updated",data:updateData});


    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const deleteData=async(req,res)=>{
    try{
        const getId=req.params.id;
        const deleteData=await newsModal.findByIdAndDelete({_id:getId})
        res.status(200).json({
            message:"Data Deleted SuccessFully"
        })



    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}


module.exports={postData,getData,updateData,deleteData}