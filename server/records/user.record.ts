import {UserEntity} from "../types";

interface NewUserEntity extends Omit<UserEntity, 'id'> {
    id?: string;
}

export class UserRecord implements UserEntity {
    id: string;
    name: string;
    email: string;

    constructor(obj: NewUserEntity) {
    }

}
