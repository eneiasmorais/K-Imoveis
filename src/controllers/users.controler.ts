import { Request, Response } from "express";
import {
  UserRead,
  UserReturn,
  UserUpdate,
  userUpdateEnter,
} from "../interfaces";
import { userService } from "../services";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userService.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const admin: boolean = res.locals.decoded.admin;
  const users: UserRead = await userService.read(admin);

  return res.status(200).json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userService.update(
    res.locals.foundEntity,
    req.body
  );
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userService.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, update, destroy };
