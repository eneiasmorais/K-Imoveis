import "reflect-metadata";
import "express-async-errors";
import express from "express";
import {
  categoriesRouter,
  realEstatesRouter,
  schedulesRouter,
  sessionRouter,
  usersRouter,
} from "./routers";
import { handleError } from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realEstatesRouter);
app.use("/schedules", schedulesRouter);

app.use(handleError);

export default app;
