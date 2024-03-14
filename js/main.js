"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const login_1 = __importDefault(require("./login"));
const loggedIn_1 = __importDefault(require("./loggedIn"));
require("jquery");
(0, loggedIn_1.default)();
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    (0, login_1.default)((0, user_1.getUsers)()[0], { username, password });
    ;
});
console.log($('#loginButton'));
