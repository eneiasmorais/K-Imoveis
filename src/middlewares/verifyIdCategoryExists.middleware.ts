import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoriesRepository } from "../repositories";
import { AppError } from "../errors";
import { CategoryReturn, CategoryType } from "../interfaces";

export const verifyIdCategoryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const categoryId: number = Number(req.params.id);

  const foundCategory: Category | null = await categoriesRepository.findOneBy({
    id: categoryId,
  });
  if (!foundCategory) throw new AppError("Category not found", 404);

  res.locals = { ...res.locals, foundCategory };

  return next();
};
