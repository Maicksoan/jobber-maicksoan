"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servico_controller_1 = require("../controller/servico.controller");
class ServicoRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', servico_controller_1.default.find);
        this.router.post('/', servico_controller_1.default.create);
        this.router.get('/:id([0-9]+)', servico_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', servico_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', servico_controller_1.default.delete);
    }
}
exports.default = new ServicoRouter().router;
//# sourceMappingURL=servico.router.js.map