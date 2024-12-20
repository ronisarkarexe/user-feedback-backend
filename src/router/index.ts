import express from "express";
import { UserFeedbackRouter } from "../app/modules/user_feedback/user.feedback.router";
const router = express.Router();

const modules = [
  {
    path: "/user-feedback",
    router: UserFeedbackRouter,
  },
];

modules.forEach((route) => router.use(route.path, route.router));

export const Routers = router;
