import { Router } from "express";
import middlewares from "../middlewares";
import {
  userCreateSchema,
  userUpdateEnterSchema,
  userUpdateSchema,
} from "../schemas/user.schema";
import usersControler from "../controllers/users.controler";

export const usersRouter: Router = Router();

usersRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.verifyEmail,
  usersControler.create
);

usersRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.verifyIsAdmin,
  usersControler.read
);

usersRouter.use("/:id", middlewares.verifyId, middlewares.verifyToken);

usersRouter.patch(
  "/:id",
  middlewares.verifyIsAdminOrOwner,
  middlewares.validateBody(userUpdateEnterSchema),
  middlewares.verifyEmail,
  usersControler.update
);

usersRouter.delete("/:id", middlewares.verifyIsAdmin, usersControler.destroy);
