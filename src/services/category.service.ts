import { Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import { CategoryCreate, CategoryReturn, CategoryType } from "../interfaces";
import { categoriesRepository } from "../repositories";

const create = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoriesRepository.create(payload);
  await categoriesRepository.save(category);

  return category;
};

const read = async (): Promise<CategoryReturn> => {
  const categories: CategoryReturn = await categoriesRepository
    .createQueryBuilder("c")
    .getMany();
  return categories;
};

const retrieve = async (id: number): Promise<Category | null> => {
  const category: Category | null = await categoriesRepository.findOne({
    where: { id: id },
    relations: { realEstate: true },
  });

  return category;
};

export default { create, read, retrieve };
