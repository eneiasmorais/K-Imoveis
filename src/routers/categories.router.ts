import { Router } from "express";
import categoriesController from "../controllers/categories.controller";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";

export const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyIsAdmin,
  middlewares.validateBody(categoryCreateSchema),
  middlewares.verifyCategoryName,
  categoriesController.create
);

categoriesRouter.get("", categoriesController.read);

categoriesRouter.get(
  "/:id/realEstate",
  middlewares.verifyIdCategoryExists,
  categoriesController.retrieve
);
