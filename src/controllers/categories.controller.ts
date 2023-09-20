import { NextFunction, Request, Response } from "express";
import { Category, RealEstate } from "../entities";
import { CategoryReturn } from "../interfaces";
import { categoryService } from "../services";
import { categoriesRepository } from "../repositories";
import { AppError } from "../errors";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoryService.create(req.body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const categories: CategoryReturn = await categoryService.read();
  return res.status(200).json(categories);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const categoryId: number = Number(req.params.id);

  const category: Category | null = await categoryService.retrieve(categoryId);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return res.json(category);
};

export default { create, read, retrieve };
