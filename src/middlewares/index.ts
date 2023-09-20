import { handleError } from "./handleError.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyEmail } from "./verifyEmailExists.middleware";
import { verifyId } from "./verifyIdExists.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { verifyIsAdmin } from "./verifyIsAdmin.middlewares";
import { verifyIsAdminOrOwner } from "./verifyIsAdminOrIsOwner.middleware";
import { verifyCategoryName } from "./verifyCategoryName.middleware";
import { verifyIdRealEstateExists } from "./verifyIdRealEstate.middleware";
import { verifyAddress } from "./verifyAddress.middleware";
import { verifyWorkDaysAndHours } from "./verifyWorkDaysAndHours.middleware";
import { verifyIdRealEstateExistsBody } from "./verifyIdRealEstateBody.middleware";
import { verifyUserSchedule } from "./verifyUserSchedule.middleware";
import { verifyIdCategoryExists } from "./verifyIdCategoryExists.middleware";
import { verifyUserScheduleExists } from "./verifyUserScheduleExists.middleware";

export default {
  handleError,
  validateBody,
  verifyEmail,
  verifyId,
  verifyToken,
  verifyIsAdmin,
  verifyIsAdminOrOwner,
  verifyCategoryName,
  verifyIdRealEstateExists,
  verifyAddress,
  verifyWorkDaysAndHours,
  verifyIdRealEstateExistsBody,
  verifyUserSchedule,
  verifyIdCategoryExists,
  verifyUserScheduleExists,
};
