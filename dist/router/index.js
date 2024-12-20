"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = __importDefault(require("express"));
const user_feedback_router_1 = require("../app/modules/user_feedback/user.feedback.router");
const router = express_1.default.Router();
const modules = [
    {
        path: "/user-feedback",
        router: user_feedback_router_1.UserFeedbackRouter,
    },
];
modules.forEach((route) => router.use(route.path, route.router));
exports.Routers = router;
