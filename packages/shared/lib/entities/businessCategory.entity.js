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
exports.BusinessCategoryEntity = void 0;
const typeorm_1 = require("typeorm");
const businessSubCategory_entity_1 = require("./businessSubCategory.entity");
let BusinessCategoryEntity = class BusinessCategoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BusinessCategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], BusinessCategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BusinessCategoryEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BusinessCategoryEntity.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], BusinessCategoryEntity.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => businessSubCategory_entity_1.BusinessSubCategoryEntity, (businessSubCategory) => businessSubCategory.businessCategory),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], BusinessCategoryEntity.prototype, "businessSubCategories", void 0);
BusinessCategoryEntity = __decorate([
    (0, typeorm_1.Entity)('business_categories', {})
], BusinessCategoryEntity);
exports.BusinessCategoryEntity = BusinessCategoryEntity;
//# sourceMappingURL=businessCategory.entity.js.map