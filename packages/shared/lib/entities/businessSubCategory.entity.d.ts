import { BusinessCategoryEntity } from './businessCategory.entity';
import { BusinessDetailCategoryEntity } from './businessDetailCategory.entity';
export declare class BusinessSubCategoryEntity {
    id: string;
    name: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    businessDetailCategories: BusinessDetailCategoryEntity[];
    businessCategory: BusinessCategoryEntity;
}
