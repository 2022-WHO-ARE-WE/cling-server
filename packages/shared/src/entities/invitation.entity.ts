import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { NodeEntity } from './node.entity';

/*
CREATE TABLE invitations (
	id UUID(),
	accepted BOOLEAN,
	guest_email VARCHAR(254),
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	node node,
);
*/

@Entity('invitations', {})
export class InvitationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('boolean')
  accepted: boolean;

  @Column('varchar', { length: 254 })
  guestEmail: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @ManyToOne(() => NodeEntity, (node) => node.invitations)
  @JoinTable()
  node: NodeEntity;
}
