"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var mongoose_1 = require("mongoose");
var messageSchema = new mongoose_1.default.Schema({
    user: String,
    text: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.Message = mongoose_1.default.model('Message', messageSchema);
