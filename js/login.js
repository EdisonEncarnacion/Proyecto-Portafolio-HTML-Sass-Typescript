"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggedIn_1 = __importDefault(require("./loggedIn"));
function default_1(dbUser, formInfo) {
    if (formInfo.username === dbUser.username) {
        if (formInfo.password === dbUser.password) {
            localStorage.setItem('username', formInfo.username);
            (0, loggedIn_1.default)();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}
exports.default = default_1;
