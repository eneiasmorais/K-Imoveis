import {
  UserCreate,
  UserRead,
  UserRepo,
  UserReturn,
  UserSchedule,
  UserType,
  UserUpdate,
} from "../interfaces/user.interface";
import { User } from "../entities";
import { usersRepository } from "../repositories";
import {
  userReadSchema,
  userScheduleSchema,
  userReturnSchema,
} from "../schemas";
const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = usersRepository.create(payload);
  await usersRepository.save(user);

  return userReturnSchema.parse(user);
};

const read = async (admin: boolean): Promise<UserRead> => {
  if (admin) {
    const users: Array<User> = await usersRepository.find({
      withDeleted: true,
    });
    return userReadSchema.parse(users);
  }
  return userReadSchema.parse(await usersRepository.find());
};

const update = async (
  user: UserType,
  payload: UserUpdate
): Promise<UserReturn> => {
  const updatedUser: User = usersRepository.create({ ...user, ...payload });
  await usersRepository.save(updatedUser);
  return userReturnSchema.parse(updatedUser);
};

const destroy = async (user: User): Promise<void> => {
  await usersRepository.softRemove(user);
};

export default { create, read, update, destroy };
