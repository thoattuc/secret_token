import {Request, Response, NextFunction} from "express";
import {User} from "../models/User";
import {AppDataSource} from "../configs/data-source";
import bcrypt from "bcrypt";
class UserController {
    private userRepository: any;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (req: Request, res: Response, next: NextFunction) => {
        console.log(">>>axios",req.body);
        try {
            const {username, password} = req.body;
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            await this.userRepository.save({
                username,
                password: passwordHash
            });
            res.status(200).json({message: "Register success"});
        } catch (error) {
            console.log(error);
        }
    };
}

export default new UserController();