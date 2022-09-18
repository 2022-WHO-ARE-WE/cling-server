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
exports.BusinessDetailCategoryEntity = void 0;
const typeorm_1 = require("typeorm");
const businessCode_entity_1 = require("./businessCode.entity");
const businessSubCategory_entity_1 = require("./businessSubCategory.entity");
let BusinessDetailCategoryEntity = class BusinessDetailCategoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BusinessDetailCategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], BusinessDetailCategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BusinessDetailCategoryEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BusinessDetailCategoryEntity.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], BusinessDetailCategoryEntity.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => businessCode_entity_1.BusinessCodeEntity, (businessCode) => businessCode.businessDetailCategory),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], BusinessDetailCategoryEntity.prototype, "businessCodes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => businessSubCategory_entity_1.BusinessSubCategoryEntity, (businessSubCategory) => businessSubCategory.businessDetailCategories),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", businessSubCategory_entity_1.BusinessSubCategoryEntity)
], BusinessDetailCategoryEntity.prototype, "businessSubCategory", void 0);
BusinessDetailCategoryEntity = __decorate([
    (0, typeorm_1.Entity)('business_detail_categories', {})
], BusinessDetailCategoryEntity);
exports.BusinessDetailCategoryEntity = BusinessDetailCategoryEntity;
//# sourceMappingURL=businessDetailCategory.entity.js.map