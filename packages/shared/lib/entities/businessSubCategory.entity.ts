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
import { BusinessCategoryEntity } from './businessCategory.entity';
import { BusinessDetailCategoryEntity } from './businessDetailCategory.entity';

/*
CREATE TABLE business_sub_categories (
	id UUID(),
	name VARCHAR(36),
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	business_detail_categories business_detail_category[],
	business_category business_category,
);
*/

@Entity('business_sub_categories', {})
export class BusinessSubCategoryEntity {
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
    () => BusinessDetailCategoryEntity,
    (businessDetailCategory) => businessDetailCategory.businessSubCategory,
  )
  @JoinColumn()
  businessDetailCategories: BusinessDetailCategoryEntity[];

  @ManyToOne(
    () => BusinessCategoryEntity,
    (businessCategory) => businessCategory.businessSubCategories,
  )
  @JoinColumn()
  businessCategory: BusinessCategoryEntity;
}
