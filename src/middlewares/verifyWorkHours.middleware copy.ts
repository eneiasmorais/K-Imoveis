import { NextFunction, Request, Response } from "express";
import { schedulesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyWorkHours = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const hourSchedule: string = req.body.hour;

  if (hourSchedule) {
    const findHour: boolean = await schedulesRepository.exist({
      where: {
        hour: hourSchedule,
      },
    });

    if (hourSchedule >= "18" || hourSchedule < "8") {
      throw new AppError("Invalid hour, available times are 8AM to 18PM", 409);
    }
  }
  next();
};
