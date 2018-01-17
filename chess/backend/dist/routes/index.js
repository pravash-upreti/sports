"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HomeController = require("../controllers/home");
const router = express_1.Router();
router.get('/', HomeController.index);
exports.default = router;
//# sourceMappingURL=index.js.map