import "reflect-metadata";
import {DataSource} from "typeorm";
import { User } from "../models/User";
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin95",
    database: "secret_token",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ["dist/src/migrations/*.ts"],
});

async function DBconnect() {
    try {
        let connect = await AppDataSource.initialize();
        if (connect) {
            console.log("Connected to database");
        } else {
            console.log("Not connected to database");
        }
    } catch (err) {
        console.log(err)
    }
}

export {DBconnect, AppDataSource};