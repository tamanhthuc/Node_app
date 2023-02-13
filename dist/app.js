"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = require("./config/cors");
var errors_1 = __importDefault(require("./config/errors"));
var router_1 = require("./config/router");
var mail_1 = require("./utils/mail");
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
(0, mail_1.configMail)();
app.use(cors_1.configCors);
router_1.AppRouter.forEach(function (config) {
    var path = config.path, router = config.router;
    app.use(path, router);
});
app.use(errors_1.default);
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect("mongodb+srv://" + process.env.DATABASE_USERNAME + ":" + process.env.DATABASE_PASSWORD + "@cluster0.bhp9h.mongodb.net/app-api?retryWrites=true&w=majority").then(function (response) {
}).catch(function (err) {
    console.log(err);
});
app.listen(process.env.PORT || 3000, function () {
    // do something
});
