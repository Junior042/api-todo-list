import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "../models/modelProduct";
import { User } from "../models/modelUser";

const Database = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root2",
    password: "1234",
    database: "todo_list",
    entities: [User, Product],
    synchronize: true,
    logging: false,
})

export default Database.initialize();