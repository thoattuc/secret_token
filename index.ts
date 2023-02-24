import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import {DBconnect} from "./src/configs/data-source";
import route from "./src/routes/router";
const PORT = 3000;

const app = express();

DBconnect();

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

route(app);

app.listen(PORT, () => {
    console.log("App running on port: "+ PORT)
});