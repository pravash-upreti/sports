"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const middlewares_1 = require("./middlewares");
dotenv.config({
    path: '.env'
});
const app = express();
const port = parseInt(process.env.APP_PORT, 10) || 5000;
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', middlewares_1.default);
app.use('/', routes_1.default);
app.listen(app.get('port'));
//# sourceMappingURL=server.js.map