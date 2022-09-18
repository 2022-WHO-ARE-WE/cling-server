import { CompanyEntity } from './company.entity';
import { PipelineEntity } from './pipeline.entity';
export declare class TransparentCodeEntity {
    id: string;
    contents: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate?: Date;
    company: CompanyEntity;
    pipeline: PipelineEntity[];
}
