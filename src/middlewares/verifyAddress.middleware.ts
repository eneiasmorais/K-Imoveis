import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { Address } from "../entities";
import { addressesRepositories } from "../repositories";

export const verifyAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const street: string = req.body.address.street;
  const zipCode: string = req.body.address.zipCode;
  const number: string = req.body.address.number;
  const city: string = req.body.address.city;
  const state: string = req.body.address.state;

  const foundAdress = await addressesRepositories.findOne({
    where: {
      street: street,
      zipCode: zipCode,
      number: number,
      city: city,
      state: state,
    },
  });

  if (foundAdress) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};
