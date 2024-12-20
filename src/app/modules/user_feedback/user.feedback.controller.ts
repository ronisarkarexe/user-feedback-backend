import { Request, Response } from "express";
import { userFeedbackFilterFields } from "./user.feedback.constant";
import { UserFeedbackService } from "./user.feedback.service";

const createUserFeedback = async (req: Request, res: Response) => {
  try {
    const result = await UserFeedbackService.createUserFeedback(req.body);
    res.status(200).json({
      message: "User Feedback created successfully!",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

const getUserFeedbacks = async (req: Request, res: Response) => {
  try {
    const filters: Partial<Record<string, string>> = {};
    userFeedbackFilterFields.forEach((key) => {
      if (req.query[key]) {
        filters[key] = req.query[key] as string;
      }
    });
    const result = await UserFeedbackService.getUserFeedbacks(filters);
    res.status(200).json({
      message: "User Feedbacks successfully!",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const UserFeedbackController = {
  createUserFeedback,
  getUserFeedbacks,
};
