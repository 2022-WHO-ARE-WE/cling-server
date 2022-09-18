import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BusinessCodeEntity } from './businessCode.entity';
import { CompanyEntity } from './company.entity';
import { InvitationEntity } from './invitation.entity';
import { PipelineEntity } from './pipeline.entity';

/*
CREATE TABLE nodes (
	id UUID(),
	name VARCHAR(36),
	head_id CHAR(36),
	description TEXT,
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	business_code business_code, 
	pipeline pipeline,
	company company,
	invitations invitation[],
);
*/

@Entity('nodes', {})
export class NodeEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 36 })
  name: string;

  @Column('char', { length: 36 })
  headId: string;

  @Column('text')
  description: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  @DeleteDateColumn()
  deletedDate?: Date;

  @ManyToOne(() => BusinessCodeEntity, (businessCode) => businessCode.nodes)
  @JoinTable()
  businessCode: BusinessCodeEntity;

  @ManyToOne(() => PipelineEntity, (pipeline) => pipeline.nodes)
  @JoinTable()
  pipeline: PipelineEntity;

  @ManyToOne(() => CompanyEntity, (company) => company.nodes)
  @JoinTable()
  company: CompanyEntity;

  @OneToMany(() => InvitationEntity, (invitation) => invitation.node)
  @JoinTable()
  invitations: InvitationEntity[];
}
