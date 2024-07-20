'use client'
import * as React from 'react';
// import {axios} from 'next/index'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function Home() {
  const [data,setFormdata]=useState({name:"",email:"",password:""})
  const handleSubmit=(e)=>{
  
  }
//  console.log(data)
  return (
   <>
   <main>
    <h1 className="text-3xl text-center my-3 font-semibold w-[90%] mx-auto  p-2 sm:py-8 bg-teal-400 rounded-lg px-5">Welcome to DB Media App   </h1>
    <h3 className="bg-red-400  py-2 px-3 text-xl max-w-3xl rounded-l text-white text-center mx-auto">you can upload images text videos files and audios to our storage </h3>
    <div>
    <Box
     sx={{
      maxWidth:'400px',
      margin : "20px auto ",
      display:'flex',
      flexDirection:"column",
      gap:"12px"
     }}
    >
      <TextField id="outlined-basic" name='name' onChange={(e)=>setFormdata({...data,[e.target.name]:e.target.value})} label="Name" variant="outlined" />
      <TextField id="outlined-basic" name='email '  onChange={(e)=>setFormdata({...data,[e.target.name]:e.target.value})}   label="Email" variant="outlined" />
      <TextField id="outlined-basic" password="password"  name="password" onChange={(e)=>setFormdata({...data,[e.target.name]:e.target.value})}  label="Password" variant="outlined" />
      <Button sx={
        {
          padding:"8px"
        }
      } variant="contained" onSubmit={handleSubmit} >Sign up</Button>
    </Box>
    </div>
   </main>
   </>
  );
}
