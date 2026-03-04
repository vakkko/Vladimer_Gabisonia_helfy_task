import express from "express";

import cors from "cors";

import routes from "./routes/taskRouter.js";

import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/api/tasks", routes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
