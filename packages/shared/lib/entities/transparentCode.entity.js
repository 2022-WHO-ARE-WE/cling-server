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
exports.TransparentCodeEntity = void 0;
const typeorm_1 = require("typeorm");
const company_entity_1 = require("./company.entity");
const pipeline_entity_1 = require("./pipeline.entity");
let TransparentCodeEntity = class TransparentCodeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TransparentCodeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], TransparentCodeEntity.prototype, "contents", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TransparentCodeEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TransparentCodeEntity.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], TransparentCodeEntity.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.CompanyEntity, (company) => company.transparentCodes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", company_entity_1.CompanyEntity)
], TransparentCodeEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => pipeline_entity_1.PipelineEntity, (pipeline) => pipeline.transparentCodes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], TransparentCodeEntity.prototype, "pipeline", void 0);
TransparentCodeEntity = __decorate([
    (0, typeorm_1.Entity)('transparent_codes', {})
], TransparentCodeEntity);
exports.TransparentCodeEntity = TransparentCodeEntity;
//# sourceMappingURL=transparentCode.entity.js.map