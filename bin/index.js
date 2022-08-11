"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require('body-parser');
// const express=require('express')
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
const port = process.env.PORT || 4040;
// mongoose.connect(process.env.MONGODB_URI)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(), (req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
// app.use("/news", routes);
app.get("*", function (req, res) {
    res.sendStatus(404);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
