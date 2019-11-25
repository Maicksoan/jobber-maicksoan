"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const contratante_entity_1 = require("./contratante.entity");
const prestador_entity_1 = require("./prestador.entity");
const itempedido_entity_1 = require("./itempedido.entity");
const tabelapreco_entity_1 = require("./tabelapreco.entity");
let PedidoEntity = class PedidoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, length: 6 }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "codigo", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'date' }),
    __metadata("design:type", Date)
], PedidoEntity.prototype, "dtpedido", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 255 }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "observacao", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tabelapreco_entity_1.TabelaPrecoEntity, { eager: true, nullable: true }),
    typeorm_1.JoinColumn({ name: 'tabelapreco_id' }),
    __metadata("design:type", tabelapreco_entity_1.TabelaPrecoEntity)
], PedidoEntity.prototype, "tabelapreco", void 0);
__decorate([
    typeorm_1.ManyToOne(type => contratante_entity_1.ContratanteEntity, { eager: true, nullable: false }),
    typeorm_1.JoinColumn({ name: 'contratante_id' }),
    __metadata("design:type", contratante_entity_1.ContratanteEntity)
], PedidoEntity.prototype, "cliente", void 0);
__decorate([
    typeorm_1.ManyToOne(type => prestador_entity_1.PrestadorEntity, { eager: true, nullable: false }),
    typeorm_1.JoinColumn({ name: 'prestador_id' }),
    __metadata("design:type", prestador_entity_1.PrestadorEntity)
], PedidoEntity.prototype, "vendedor", void 0);
__decorate([
    typeorm_1.OneToMany(type => itempedido_entity_1.ItemPedidoEntity, item => item.pedido, { eager: true }),
    __metadata("design:type", Array)
], PedidoEntity.prototype, "itens", void 0);
PedidoEntity = __decorate([
    typeorm_1.Entity({ name: 'pedido' })
], PedidoEntity);
exports.PedidoEntity = PedidoEntity;
//# sourceMappingURL=pedido.entity.js.map