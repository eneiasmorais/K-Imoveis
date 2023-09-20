import { Router } from "express";
import { realEstatesController } from "../controllers";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas";

export const realEstatesRouter: Router = Router();

realEstatesRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyIsAdmin,
  middlewares.validateBody(realEstateCreateSchema),
  middlewares.verifyAddress,
  realEstatesController.create
);

realEstatesRouter.get("", realEstatesController.read);
