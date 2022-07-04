import express, { Express } from "express";
import "dotenv/config";

import routes from "./src/routes";

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
