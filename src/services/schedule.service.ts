import { RealEstate } from "../entities";
import { AppError } from "../errors";
import { ScheduleCreate } from "../interfaces";
import { realEstatesRepository } from "../repositories";
import schedulesRepository from "../repositories/schedules.repository";

const create = async (
  { realEstateId, date, hour }: ScheduleCreate,
  userId: number
): Promise<void> => {
  const newSchedule = schedulesRepository.create({
    date,
    hour,
    user: { id: userId },
    realEstate: { id: realEstateId },
  });

  await schedulesRepository.save(newSchedule);
};

const retrieve = async (realEstateId: number): Promise<RealEstate> => {
  const realEstate: RealEstate | null = await realEstatesRepository
    .createQueryBuilder("re")
    .leftJoinAndSelect("re.address", "a")
    .leftJoinAndSelect("re.category", "c")
    .leftJoinAndSelect("re.schedules", "s")
    .leftJoinAndSelect("s.user", "u")
    .where("re.id = :realEstateId", { realEstateId })
    .getOne();

  if (!realEstate) {
    throw new AppError("Real estate not found", 404);
  }

  return realEstate;
};

export default { create, retrieve };
