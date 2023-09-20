import { AppDataSource } from "../data-source";
import { Address, RealEstate } from "../entities";
import {
  RealEstateCreate,
  RealEstateRead,
  RealEstateReturn,
} from "../interfaces";
import {
  addressesRepositories,
  categoriesRepository,
  realEstatesRepository,
} from "../repositories";

const create = async (payload: any): Promise<any> => {
  const { address, categoryId, ...payloadRest } = payload;

  const registeredAddress = addressesRepositories.create(address);
  await addressesRepositories.save(registeredAddress);

  const searchCategory = await categoriesRepository.findOne({
    where: {
      id: categoryId,
    },
  });

  const realEstate = realEstatesRepository.create({
    address: registeredAddress,
    category: searchCategory,
    ...payloadRest,
  });
  await realEstatesRepository.save(realEstate);

  return realEstate;
};

const read = async (): Promise<RealEstate[]> => {
  const repo: RealEstate[] = await realEstatesRepository.find({
    relations: {
      address: true,
    },
  });
  return repo;
};

export default { create, read };
