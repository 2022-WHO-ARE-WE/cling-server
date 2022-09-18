import { BusinessCodeEntity } from './businessCode.entity';
import { BusinessSubCategoryEntity } from './businessSubCategory.entity';
export declare class BusinessDetailCategoryEntity {
    id: string;
    name: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    businessCodes: BusinessCodeEntity[];
    businessSubCategory: BusinessSubCategoryEntity;
}
