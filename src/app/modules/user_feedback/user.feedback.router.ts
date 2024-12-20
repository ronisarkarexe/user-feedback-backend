import express from "express";
import { UserFeedbackController } from "./user.feedback.controller";

const router = express.Router();

router.post("/create", UserFeedbackController.createUserFeedback);
router.get("/", UserFeedbackController.getUserFeedbacks);

export const UserFeedbackRouter = router;
