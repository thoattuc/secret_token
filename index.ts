import express, {Request, Response} from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {DBconnect} from "./src/configs/data-source";
import route from "./src/routes/router";
import * as dotenv from "dotenv";
const PORT = 3000;

dotenv.config();

const app = express();

DBconnect();

app.use(bodyParser.json());
app.use(cookieParser(process.env.USER_CODE_SECRET));

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static('public'));

route(app);

app.listen(PORT, () => {
    console.log("App running on port: "+ PORT);
});