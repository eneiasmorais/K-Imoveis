import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { usersRepository } from "../repositories";
import { AppError } from "../errors";
import { Repository } from "typeorm";

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userEmail: string = req.body.email;

  if (userEmail) {
    const findEmail: boolean = await usersRepository.exist({
      where: {
        email: userEmail,
      },
    });

    if (findEmail) {
      throw new AppError("Email already exists", 409);
    }
  }
  next();
};
