import { NodeEntity } from './node.entity';
import { TransparentCodeEntity } from './transparentCode.entity';
export declare class CompanyEntity {
    id: string;
    type: string;
    email: string;
    name: string;
    description: string;
    businessNumber: string;
    accessToken: string;
    refreshToken: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    transparentCodes: TransparentCodeEntity[];
    nodes: NodeEntity[];
}
