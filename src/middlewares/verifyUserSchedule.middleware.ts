import { NextFunction, Request, Response } from "express";
import { schedulesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyUserSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const date: string = req.body.date;
  const hour: string = req.body.hour;
  const id: number = res.locals.foundRealEstate.id;
  const { sub } = res.locals.decoded;

  const userScheduleExists: boolean =
    (await schedulesRepository
      .createQueryBuilder("s")
      .leftJoin("s.user", "u")
      .where("u.id = :userId", { userId: sub })
      .andWhere("s.date = :date", { date })
      .andWhere("s.hour = :hour", { hour })
      .getCount()) > 0;

  const scheduleExists: boolean =
    (await schedulesRepository
      .createQueryBuilder("s")
      .where("s.date = :date", { date })
      .andWhere("s.hour = :hour", { hour })
      .andWhere("s.realEstateId = :realEstateId", { realEstateId: id })
      .getCount()) > 0;

  if (scheduleExists && !userScheduleExists) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  } else if (userScheduleExists && userScheduleExists) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};
