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
import { BusinessDetailCategoryEntity } from './businessDetailCategory.entity';
import { NodeEntity } from './node.entity';

/*
CREATE TABLE business_codes (
	id UUID(),
	code VARCHAR(12),
	standard TEXT,
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	nodes node[],
	business_detail_category business_detail_category,
);
*/

@Entity('business_codes')
export class BusinessCodeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 12 })
  code: string;

  @Column('text')
  standard: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(() => NodeEntity, (node) => node.businessCode)
  @JoinColumn()
  nodes: NodeEntity[];

  @ManyToOne(
    () => BusinessDetailCategoryEntity,
    (businessDetailCategory) => businessDetailCategory.businessCodes,
  )
  @JoinColumn()
  businessDetailCategory: BusinessDetailCategoryEntity;
}
