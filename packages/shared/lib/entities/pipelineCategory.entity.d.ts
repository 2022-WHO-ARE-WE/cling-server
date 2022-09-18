import { PipelineEntity } from './pipeline.entity';
export declare class PipelineCategoryEntity {
    id: string;
    name: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate?: Date;
    pipelines: PipelineEntity[];
}
