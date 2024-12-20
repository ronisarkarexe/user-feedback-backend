"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFeedbackRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_feedback_controller_1 = require("./user.feedback.controller");
const router = express_1.default.Router();
router.post("/create", user_feedback_controller_1.UserFeedbackController.createUserFeedback);
router.get("/", user_feedback_controller_1.UserFeedbackController.getUserFeedbacks);
exports.UserFeedbackRouter = router;
