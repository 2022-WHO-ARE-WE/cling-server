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
exports.BusinessSubCategoryEntity = void 0;
const typeorm_1 = require("typeorm");
const businessCategory_entity_1 = require("./businessCategory.entity");
const businessDetailCategory_entity_1 = require("./businessDetailCategory.entity");
let BusinessSubCategoryEntity = class BusinessSubCategoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BusinessSubCategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], BusinessSubCategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BusinessSubCategoryEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BusinessSubCategoryEntity.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], BusinessSubCategoryEntity.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => businessDetailCategory_entity_1.BusinessDetailCategoryEntity, (businessDetailCategory) => businessDetailCategory.businessSubCategory),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], BusinessSubCategoryEntity.prototype, "businessDetailCategories", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => businessCategory_entity_1.BusinessCategoryEntity, (businessCategory) => businessCategory.businessSubCategories),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", businessCategory_entity_1.BusinessCategoryEntity)
], BusinessSubCategoryEntity.prototype, "businessCategory", void 0);
BusinessSubCategoryEntity = __decorate([
    (0, typeorm_1.Entity)('business_sub_categories', {})
], BusinessSubCategoryEntity);
exports.BusinessSubCategoryEntity = BusinessSubCategoryEntity;
//# sourceMappingURL=businessSubCategory.entity.js.map