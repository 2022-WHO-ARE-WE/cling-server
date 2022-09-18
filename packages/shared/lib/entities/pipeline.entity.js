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
exports.PipelineEntity = void 0;
const typeorm_1 = require("typeorm");
const node_entity_1 = require("./node.entity");
const pipelineCategory_entity_1 = require("./pipelineCategory.entity");
const transparentCode_entity_1 = require("./transparentCode.entity");
let PipelineEntity = class PipelineEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PipelineEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], PipelineEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], PipelineEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], PipelineEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], PipelineEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], PipelineEntity.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], PipelineEntity.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => node_entity_1.NodeEntity, (node) => node.pipeline),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], PipelineEntity.prototype, "nodes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => transparentCode_entity_1.TransparentCodeEntity, (transparentCode) => transparentCode.pipeline),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], PipelineEntity.prototype, "transparentCodes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pipelineCategory_entity_1.PipelineCategoryEntity, (pipelineCategory) => pipelineCategory.pipelines),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", pipelineCategory_entity_1.PipelineCategoryEntity)
], PipelineEntity.prototype, "pipelineCategory", void 0);
PipelineEntity = __decorate([
    (0, typeorm_1.Entity)('pipelines', {})
], PipelineEntity);
exports.PipelineEntity = PipelineEntity;
//# sourceMappingURL=pipeline.entity.js.map