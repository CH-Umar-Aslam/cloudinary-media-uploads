import express from "express"

import cors from "cors"

import { userRouter } from "./routes/user.routes.js";



const app=express();

app.use(cors());

app.use(express.json())

app.use("/api",userRouter)


const PORT = process.env.PORT || 8080


app.listen(PORT,()=>{

    console.log("server is listening at :", PORT );

})
