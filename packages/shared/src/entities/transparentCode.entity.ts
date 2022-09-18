import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompanyEntity } from './company.entity';
import { PipelineEntity } from './pipeline.entity';

/*
CREATE TABLE transparent_codes (
	id UUID(),
	contents TEXT,
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	company company,
	pipelines pipeline[],
);
*/

@Entity('transparent_codes', {})
export class TransparentCodeEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  contents: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  @DeleteDateColumn()
  deletedDate?: Date;

  @ManyToOne(() => CompanyEntity, (company) => company.transparentCodes)
  @JoinTable()
  company: CompanyEntity;

  @ManyToMany(() => PipelineEntity, (pipeline) => pipeline.transparentCodes)
  @JoinTable()
  pipeline: PipelineEntity[];
}
