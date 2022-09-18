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
exports.NodeEntity = void 0;
const typeorm_1 = require("typeorm");
const businessCode_entity_1 = require("./businessCode.entity");
const company_entity_1 = require("./company.entity");
const invitation_entity_1 = require("./invitation.entity");
const pipeline_entity_1 = require("./pipeline.entity");
let NodeEntity = class NodeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NodeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], NodeEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { length: 36 }),
    __metadata("design:type", String)
], NodeEntity.prototype, "headId", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], NodeEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NodeEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NodeEntity.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], NodeEntity.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => businessCode_entity_1.BusinessCodeEntity),
    __metadata("design:type", businessCode_entity_1.BusinessCodeEntity)
], NodeEntity.prototype, "businessCode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pipeline_entity_1.PipelineEntity, (pipeline) => pipeline.nodes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", pipeline_entity_1.PipelineEntity)
], NodeEntity.prototype, "pipeline", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.CompanyEntity, (company) => company.nodes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", company_entity_1.CompanyEntity)
], NodeEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => invitation_entity_1.InvitationEntity, (invitation) => invitation.node),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], NodeEntity.prototype, "invitations", void 0);
NodeEntity = __decorate([
    (0, typeorm_1.Entity)('nodes', {})
], NodeEntity);
exports.NodeEntity = NodeEntity;
//# sourceMappingURL=node.entity.js.map