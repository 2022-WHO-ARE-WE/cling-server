import { NodeEntity } from './node.entity';
import { PipelineCategoryEntity } from './pipelineCategory.entity';
import { TransparentCodeEntity } from './transparentCode.entity';
export declare class PipelineEntity {
    id: string;
    description: string;
    name: string;
    category: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate?: Date;
    nodes: NodeEntity[];
    transparentCodes: TransparentCodeEntity[];
    pipelineCategory: PipelineCategoryEntity;
}
