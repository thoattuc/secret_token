import homeRouter from "./home.router";
import apiRouter from "./api.router";
import authRouter from "./auth.router";
import adminRouter from "./admin.router";
const route = (app) => {
    app.use('/home', homeRouter);
    app.use('/api', apiRouter);
    app.use('/auth', authRouter);
    app.use('/admin', adminRouter);
};

export default route;