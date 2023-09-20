import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { schedulesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyUserScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const date: string = req.body.date;
  const hour: string = req.body.hour;
  const id: any = res.locals.foundRealEstate.id;

  const timeExists: boolean = await schedulesRepository.exist({
    where: {
      date: date,
      hour: hour,
      user: id,
    },
  });
  if (timeExists)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};
