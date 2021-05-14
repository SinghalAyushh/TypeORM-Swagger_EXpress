import { Connection, createConnection, SimpleConsoleLogger } from "typeorm";
import dotenv from 'dotenv';

dotenv.config({});
class Database {

  public connection: Connection;

  constructor() {
    this.connectToDB();
  }

  private connectToDB(): void {
    createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1234",
      database: "Ayush",
      entities: [
        __dirname + "/entity/*.ts",
        __dirname + "/entity/*.js"
      ],
      synchronize: true,
      logging: false
    }).then(_con => {
      this.connection = _con;
      console.log("Connected to db!!");
    }).catch(console.error)
  }

}




export const db = new Database();