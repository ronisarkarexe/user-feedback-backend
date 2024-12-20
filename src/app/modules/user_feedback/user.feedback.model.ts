import { Schema, model } from "mongoose";
import { IUserFeedback, UserFeedbackModel } from "./user.feedback.interface";

const UserFeedSchema = new Schema<IUserFeedback, UserFeedbackModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["BugReport", "FeatureRequest", "GeneralFeedback", "Suggestions"],
    },
    priority: {
      type: String,
      required: true,
      enum: ["Low", "Medium", "High"],
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    feedbackDetails: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const UserFeedback = model<IUserFeedback, UserFeedbackModel>(
  "UserFeedback",
  UserFeedSchema
);
