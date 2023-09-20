import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { Category } from "../entities";
import { categoriesRepository } from "../repositories";

export const verifyCategoryName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const name: string = req.body.name;
  if (!name) return next();

  const foundEntity: Category | null = await categoriesRepository.findOneBy({
    name,
  });
  if (foundEntity) throw new AppError("Category already exists", 409);

  return next();
};
