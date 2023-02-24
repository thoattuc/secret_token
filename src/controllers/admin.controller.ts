import {Request, Response, NextFunction} from "express";

class AdminController {
    constructor() {
    }

    adminPage(req: Request, res: Response, next: NextFunction) {
        res.render('admin', {title: 'Admin'});
    }

}

export default new AdminController;