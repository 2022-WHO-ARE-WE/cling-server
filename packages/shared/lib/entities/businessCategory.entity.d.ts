import { BusinessSubCategoryEntity } from './businessSubCategory.entity';
export declare class BusinessCategoryEntity {
    id: string;
    name: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    businessSubCategories: BusinessSubCategoryEntity[];
}
