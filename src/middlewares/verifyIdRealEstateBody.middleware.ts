import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { RealEstate } from "../entities";
import { realEstatesRepository } from "../repositories";

export const verifyIdRealEstateExistsBody = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.body.realEstateId);

  const foundRealEstate: boolean = await realEstatesRepository.exist({
    where: { id: id },
  });

  if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

  res.locals = { ...res.locals, foundRealEstate };

  return next();
};
