"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFeedback = void 0;
const mongoose_1 = require("mongoose");
const UserFeedSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.UserFeedback = (0, mongoose_1.model)("UserFeedback", UserFeedSchema);
