import { Address } from './address';
import { Gender } from './gender';

export interface Thief {
    _id?: any,
    name: string;
    id: string;
    gender: Gender
    dob: Date;
    addresses: Address[];
    stateOfConviction: boolean;
}
