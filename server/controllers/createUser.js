import prisma from "../database/db.config.js";
export const createUser = async(req,res)=>{
    const {name,email,password}=req.body;
    
    const findUser = await prisma.user.findUnique({
        where :{
            email:email
        }
    })
    if(findUser){
        return res .json({status:400 ,message:"email already taken, please with other email "})
    }

    const newUser= await prisma.user.create({
       data:{
        name:name,
        email:email,
        password:password,
       }

    })
    return res.json({status:200,data:newUser,message:"user created"})

}

