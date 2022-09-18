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
exports.CompanyEntity = void 0;
const typeorm_1 = require("typeorm");
const OneToMany_1 = require("typeorm/decorator/relations/OneToMany");
const node_entity_1 = require("./node.entity");
const transparentCode_entity_1 = require("./transparentCode.entity");
let CompanyEntity = class CompanyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CompanyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 254 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], CompanyEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "businessNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 360 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 360 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CompanyEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompanyEntity.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CompanyEntity.prototype, "deletedDate", void 0);
__decorate([
    (0, OneToMany_1.OneToMany)(() => transparentCode_entity_1.TransparentCodeEntity, (transparentCode) => transparentCode.company),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "transparentCodes", void 0);
__decorate([
    (0, OneToMany_1.OneToMany)(() => node_entity_1.NodeEntity, (node) => node.company),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "nodes", void 0);
CompanyEntity = __decorate([
    (0, typeorm_1.Entity)('companies', {})
], CompanyEntity);
exports.CompanyEntity = CompanyEntity;
//# sourceMappingURL=company.entity.js.map