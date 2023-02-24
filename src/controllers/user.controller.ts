import {Request, Response, NextFunction} from "express";
import {User} from "../models/User";
import {AppDataSource} from "../configs/data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({})

export class UserController {
    private userRepository: any;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (req: Request, res: Response, next: NextFunction) => {
        console.log(">>>axios register", req.body);
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

    login = async (req: Request, res: Response, next: NextFunction) => {
        console.log(">>>axios login", req.body);
        try {
            const {username, password} = req.body; //lấy dữ lệu từ form login
            const user = await this.userRepository.findOneBy({username}); //kiểm tra trong csdl
            console.log(user);
            if (user) {
                bcrypt.compare(password, user.password, (err, same) => {
                    console.log(">>>check password same:", same);
                    if (same) {
                        //---tạo token jwt---//
                        let token = jwt.sign({
                            iss: user.username,
                            sub: user.id,
                            iat: new Date().getTime(),
                        }, process.env.USER_CODE_SECRET);
                        res.cookie("authorization", "Bearer" + token, {signed: true});
                        res.status(200).json({message: "Login success", token, user: user});
                    } else {
                        res.status(400).json({message: "Login failed - incorrect password"});
                    }
                });
            } else {
                res.status(400).json({"message": "Invalid username or password"});
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserController;
