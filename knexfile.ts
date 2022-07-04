import { Knex } from "knex";
import "dotenv/config";

const config: Knex.Config = {
  client: "mysql2",
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: "knex/migrations",
  },
  seeds: {
    directory: "knex/seeds",
  },
};

export default config;
