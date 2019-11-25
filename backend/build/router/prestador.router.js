"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestador_controller_1 = require("../controller/prestador.controller");
class PrestadorRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', prestador_controller_1.default.find);
        this.router.post('/', prestador_controller_1.default.create);
        this.router.get('/:id([0-9]+)', prestador_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', prestador_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', prestador_controller_1.default.delete);
    }
}
exports.default = new PrestadorRouter().router;
//# sourceMappingURL=prestador.router.js.map