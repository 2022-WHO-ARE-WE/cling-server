import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PipelineEntity } from './pipeline.entity';

/*
CREATE TABLE pipeline_categories (
	id UUID(),
	name VARCHAR(36),
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	pipelines pipeline[],
);
*/

@Entity('pipeline_categories', {})
export class PipelineCategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 36 })
  name: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  @DeleteDateColumn()
  deletedDate?: Date;

  @OneToMany(() => PipelineEntity, (pipeline) => pipeline.pipelineCategory)
  @JoinColumn()
  pipelines: PipelineEntity[];
}
