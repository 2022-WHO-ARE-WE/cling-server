import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OneToMany } from 'typeorm/decorator/relations/OneToMany';
import { NodeEntity } from './node.entity';
import { TransparentCodeEntity } from './transparentCode.entity';

/*
CREATE TABLE companies(
	id UUID(),
	type VARCHAR(36),
	email VARCHAR(254),
	name VARCHAR(36),
	description TEXT,
	business_number VARCHAR(36),
	access_token VARCHAR(360),
	refresh_token VARCHAR(360),
	created_date DATE,
	updated_date DATE,
	deleted_date DATE,

	transparent_codes transparent_code[],
	nodes node[],
);
*/

@Entity('companies', {})
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 36 })
  type: string;

  @Column('varchar', { length: 254 })
  email: string;

  @Column('varchar', { length: 36 })
  name: string;

  @Column('text')
  description: string;

  @Column('varchar', { length: 36 })
  businessNumber: string;

  @Column('varchar', { length: 360 })
  accessToken: string;

  @Column('varchar', { length: 360 })
  refreshToken: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(
    () => TransparentCodeEntity,
    (transparentCode) => transparentCode.company,
  )
  @JoinTable()
  transparentCodes: TransparentCodeEntity[];

  @OneToMany(() => NodeEntity, (node) => node.company)
  @JoinTable()
  nodes: NodeEntity[];
}
