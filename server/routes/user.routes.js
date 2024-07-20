import expres from "express"
import { createUser } from "../controllers/CreateUser.js";
export const userRouter =expres.Router();

userRouter.post("/create-user",createUser)