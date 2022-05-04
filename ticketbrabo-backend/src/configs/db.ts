import { Pessoa } from "@models/commons/pessoa-model";
import { Produtor } from "@models/produtor-model";
import { Pool } from "pg";
import { createConnection, DataSource } from "typeorm";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export class Db {
  public async connect() {
    try {

      const client = await pool.connect();

      const sql = "SELECT * FROM PESSOA";
      const { rows } = await client.query(sql);
      const todos = rows;

      console.log(rows);

      client.release();

    } catch (error) {
      console.error(error);
    }
  }
}


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: ["src/models/**/*.ts"],
    subscribers: [],
    migrations: []
  });
  
  //"../models/*.ts"
  
  AppDataSource.initialize()
      .then(() => {
          console.log("Start")
      })
      .catch((error) => console.log(error));
  
  