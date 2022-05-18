import { DataSource } from "typeorm";

export class DatabaseSingleton {
  private static _instace: DataSource;

  private constructor() { }

  public static get Instance() {
    if (this._instace != null) {
      return this._instace;
    }

    this._instace = new DataSource({
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

    return this._instace;
  }

   static start() {
    DatabaseSingleton.Instance.initialize()
      .then(() => {
        console.log("Start")
      })
      .catch((error) => console.log(error));
  }
}

