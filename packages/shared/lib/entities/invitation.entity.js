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
exports.InvitationEntity = void 0;
const typeorm_1 = require("typeorm");
const node_entity_1 = require("./node.entity");
let InvitationEntity = class InvitationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InvitationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Boolean)
], InvitationEntity.prototype, "accepted", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 254 }),
    __metadata("design:type", String)
], InvitationEntity.prototype, "guestEmail", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InvitationEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InvitationEntity.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], InvitationEntity.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => node_entity_1.NodeEntity, (node) => node.invitations),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", node_entity_1.NodeEntity)
], InvitationEntity.prototype, "node", void 0);
InvitationEntity = __decorate([
    (0, typeorm_1.Entity)('invitations', {})
], InvitationEntity);
exports.InvitationEntity = InvitationEntity;
//# sourceMappingURL=invitation.entity.js.map