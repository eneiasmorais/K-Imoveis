import { Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const userId = Number(res.locals.decoded.sub);

  const payload = req.body;

  const schedule = await scheduleService.create(payload, userId);
  return res.status(201).json({ message: "Schedule created" });
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const realEstateId: number = Number(req.params.id);
  const schedules = await scheduleService.retrieve(realEstateId);

  return res.status(200).json(schedules);
};

export default { create, retrieve };
