import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NodeEntity } from './node.entity';
import { PipelineCategoryEntity } from './pipelineCategory.entity';
import { TransparentCodeEntity } from './transparentCode.entity';

/*
CREATE TABLE pipelines (
	id UUID(),
	description TEXT,
	name VARCHAR(36),
	category VARCHAR(36),
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	nodes node[],
	transparent_codes transparent_code[],
	pipeline_category pipeline_category,
);
*/

@Entity('pipelines', {})
export class PipelineEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  description: string;

  @Column('varchar', { length: 36 })
  name: string;

  @Column('varchar', { length: 36 })
  category: string;

  @Column('date')
  createdDate!: Date;

  @Column('date')
  updatedDate!: Date;

  @Column('date')
  deletedDate?: Date;

  @OneToMany(() => NodeEntity, (node) => node.pipeline)
  @JoinTable()
  nodes: NodeEntity[];

  @ManyToMany(
    () => TransparentCodeEntity,
    (transparentCode) => transparentCode.pipeline,
  )
  @JoinTable()
  transparentCodes: TransparentCodeEntity[];

  @ManyToOne(
    () => PipelineCategoryEntity,
    (pipelineCategory) => pipelineCategory.pipelines,
  )
  @JoinTable()
  pipelineCategory: PipelineCategoryEntity;
}
