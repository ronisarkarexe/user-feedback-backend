import { Model } from "mongoose";

export interface IUserFeedback {
  name: string;
  email: string;
  category: string;
  priority: string;
  subject: string;
  feedbackDetails: string;
}

export type UserFeedbackModel = Model<IUserFeedback, object>;

export interface IUserFeedbackFilters {
  searchTerm?: string;
}

export interface IUserFeedbackEvents {
  name: string;
  email: string;
  category: string;
  priority: string;
  subject: string;
}
