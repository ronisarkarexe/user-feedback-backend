"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFeedbackController = void 0;
const user_feedback_constant_1 = require("./user.feedback.constant");
const user_feedback_service_1 = require("./user.feedback.service");
const createUserFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_feedback_service_1.UserFeedbackService.createUserFeedback(req.body);
        res.status(200).json({
            message: "User Feedback created successfully!",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});
const getUserFeedbacks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = {};
        user_feedback_constant_1.userFeedbackFilterFields.forEach((key) => {
            if (req.query[key]) {
                filters[key] = req.query[key];
            }
        });
        const result = yield user_feedback_service_1.UserFeedbackService.getUserFeedbacks(filters);
        res.status(200).json({
            message: "User Feedbacks successfully!",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});
exports.UserFeedbackController = {
    createUserFeedback,
    getUserFeedbacks,
};
