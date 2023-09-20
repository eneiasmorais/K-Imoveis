import { Router } from "express";
import middlewares from "../middlewares";
import { schedulesController } from "../controllers";
import { scheduleCreateSchema } from "../schemas";

export const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleCreateSchema),
  middlewares.verifyIdRealEstateExistsBody,
  middlewares.verifyUserSchedule,
  middlewares.verifyUserScheduleExists,
  middlewares.verifyWorkDaysAndHours,
  schedulesController.create
);

schedulesRouter.get(
  "/realEstate/:id",
  middlewares.verifyIdRealEstateExists,
  middlewares.verifyToken,
  middlewares.verifyIsAdmin,
  schedulesController.retrieve
);
