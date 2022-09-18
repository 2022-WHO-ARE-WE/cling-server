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
exports.BusinessCodeEntity = void 0;
const typeorm_1 = require("typeorm");
const businessDetailCategory_entity_1 = require("./businessDetailCategory.entity");
const node_entity_1 = require("./node.entity");
let BusinessCodeEntity = class BusinessCodeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BusinessCodeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 12 }),
    __metadata("design:type", String)
], BusinessCodeEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], BusinessCodeEntity.prototype, "standard", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BusinessCodeEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BusinessCodeEntity.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], BusinessCodeEntity.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => node_entity_1.NodeEntity, (node) => node.businessCode),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], BusinessCodeEntity.prototype, "nodes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => businessDetailCategory_entity_1.BusinessDetailCategoryEntity, (businessDetailCategory) => businessDetailCategory.businessCodes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", businessDetailCategory_entity_1.BusinessDetailCategoryEntity)
], BusinessCodeEntity.prototype, "businessDetailCategory", void 0);
BusinessCodeEntity = __decorate([
    (0, typeorm_1.Entity)('business_codes')
], BusinessCodeEntity);
exports.BusinessCodeEntity = BusinessCodeEntity;
//# sourceMappingURL=businessCode.entity.js.map