import { z } from "zod";
import {
  userCreateSchema,
  userReadSchema,
  userScheduleSchema,
  userReturnSchema,
  userUpdateSchema,
  userUpdateEnterSchema,
  userSchema,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type UserType = z.infer<typeof userSchema>;
type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserSchedule = z.infer<typeof userScheduleSchema>;
type UserUpdate = z.infer<typeof userUpdateSchema>;
type userUpdateEnter = z.infer<typeof userUpdateEnterSchema>;

type UserRepo = Repository<User>;

export {
  UserType,
  UserCreate,
  UserRead,
  UserReturn,
  UserRepo,
  UserSchedule,
  UserUpdate,
  userUpdateEnter,
};
