import {Request, Response, NextFunction} from "express";

class HomeController {
    constructor() {
    }

    homePage(req: Request, res: Response, next: NextFunction) {
        res.render('home');
    }

    loginPage(req: Request, res: Response, next: NextFunction) {
        res.render('login', {title: 'Login'});
    }

    registerPage(req: Request, res: Response, next: NextFunction) {
        res.render('register', {title: 'Register'});
    }
}

export default new HomeController();