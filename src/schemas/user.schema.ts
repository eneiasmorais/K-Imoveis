import { z } from "zod";
import { scheduleSchema } from "./shcedule.schema";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userReturnSchema = userSchema.omit({ password: true });
const userReadSchema = userReturnSchema.array();

const userUpdateEnterSchema = userCreateSchema
  .omit({
    admin: true,
  })
  .partial();

const userUpdateSchema = userCreateSchema.pick({
  id: true,
  name: true,
  email: true,
});

const userScheduleSchema = userReturnSchema.extend({
  schedules: scheduleSchema.omit({ id: true, categories: true }).array(),
});

export {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  userUpdateEnterSchema,
  userReturnSchema,
  userReadSchema,
  userScheduleSchema,
};
