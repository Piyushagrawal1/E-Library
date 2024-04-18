import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";


const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const { name, email, password } = req.body

    //validations
    if (!name || !email || !password) {
        const error = createHttpError(400, "All fields are required")
        return next(error)
    }

    //database call
    try {
        const user = await userModel.create({ email })   
        if (user) {
            const error = createHttpError(400, 'user already exists')
            return next(error)
        }
    } catch (error) {
        return next(createHttpError(500, "Error while getting user"))
    }
    
}

//export
export { createUser }