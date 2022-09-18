import { BusinessCodeEntity } from './businessCode.entity';
import { CompanyEntity } from './company.entity';
import { InvitationEntity } from './invitation.entity';
import { PipelineEntity } from './pipeline.entity';
export declare class NodeEntity {
    id: string;
    name: string;
    headId: string;
    description: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate?: Date;
    businessCode: BusinessCodeEntity;
    pipeline: PipelineEntity;
    company: CompanyEntity;
    invitations: InvitationEntity[];
}
