import { userFeedbackSearchFields } from "./user.feedback.constant";
import { IUserFeedback, IUserFeedbackFilters } from "./user.feedback.interface";
import { UserFeedback } from "./user.feedback.model";

const createUserFeedback = async (payload: IUserFeedback) => {
  const result = await UserFeedback.create(payload);
  return result;
};

const getUserFeedbacks = async (filters: IUserFeedbackFilters) => {
  const { searchTerm, ...filtersData } = filters;
  const andCondition = [];
  if (searchTerm) {
    andCondition.push({
      $or: userFeedbackSearchFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    andCondition.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }
  const feedbacks = andCondition.length > 0 ? { $and: andCondition } : {};
  const result = await UserFeedback.find(feedbacks).sort({ createdAt: -1 });
  return result;
};

export const UserFeedbackService = {
  createUserFeedback,
  getUserFeedbacks,
};
