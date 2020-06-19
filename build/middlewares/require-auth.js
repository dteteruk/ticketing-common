"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var not_authotized_1 = require("../errors/not-authotized");
exports.requireAuth = function (req, res, next) {
    if (!req.currentUser) {
        throw new not_authotized_1.NotAuthorizedError();
    }
    next();
};
