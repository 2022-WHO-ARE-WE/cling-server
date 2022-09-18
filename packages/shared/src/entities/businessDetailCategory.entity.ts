import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BusinessCodeEntity } from './businessCode.entity';
import { BusinessSubCategoryEntity } from './businessSubCategory.entity';

/*
CREATE TABLE business_detail_categories (
	id UUID(),
	name VARCHAR(36),
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	business_codes business_code[],
	business_sub_category business_sub_category,
);
*/

@Entity('business_detail_categories', {})
export class BusinessDetailCategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 36 })
  name: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(
    () => BusinessCodeEntity,
    (businessCode) => businessCode.businessDetailCategory,
  )
  @JoinColumn()
  businessCodes: BusinessCodeEntity[];

  @ManyToOne(
    () => BusinessSubCategoryEntity,
    (businessSubCategory) => businessSubCategory.businessDetailCategories,
  )
  @JoinColumn()
  businessSubCategory: BusinessSubCategoryEntity;
}
