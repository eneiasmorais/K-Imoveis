import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { RealEstate } from "../entities";
import { realEstatesRepository } from "../repositories";

export const verifyIdRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundRealEstate: RealEstate | null =
    await realEstatesRepository.findOneBy({
      id,
    });
  if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

  res.locals = { ...res.locals, foundRealEstate };

  return next();
};
