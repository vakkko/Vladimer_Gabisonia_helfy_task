import express from "express";

import routes from "./routes/taskRouter";

import { errorHandler } from "./middleware/errorHandler";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/api/tasks", routes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
