import { NodeEntity } from './node.entity';
export declare class InvitationEntity {
    id: string;
    accepted: boolean;
    guestEmail: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    node: NodeEntity;
}
