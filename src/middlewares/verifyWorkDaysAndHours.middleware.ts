import { NextFunction, Request, Response } from "express";
import { schedulesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyWorkDaysAndHours = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const dateSchedule: string = new Date(req.body.date)
    .toDateString()
    .split(" ")[0];
  const hourSchedule: string = req.body.hour.split(":")[0];

  if (dateSchedule == "Sat" || dateSchedule == "Sun") {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }
  if (Number(hourSchedule) >= 18 || Number(hourSchedule) < 8) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  return next();
};
