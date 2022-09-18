import { BusinessDetailCategoryEntity } from './businessDetailCategory.entity';
import { NodeEntity } from './node.entity';
export declare class BusinessCodeEntity {
    id: string;
    code: string;
    standard: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    nodes: NodeEntity[];
    businessDetailCategory: BusinessDetailCategoryEntity;
}
