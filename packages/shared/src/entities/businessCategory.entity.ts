import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BusinessSubCategoryEntity } from './businessSubCategory.entity';

/*
CREATE TABLE business_categories (
	id UUID(),
	name VARCHAR(36),
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	business_sub_categories business_sub_category[],
);
*/

@Entity('business_categories', {})
export class BusinessCategoryEntity {
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
    () => BusinessSubCategoryEntity,
    (businessSubCategory) => businessSubCategory.businessCategory,
  )
  @JoinTable()
  businessSubCategories: BusinessSubCategoryEntity[];
}
