import {LessonEntity} from "../../types";
import {ValidationError} from "../../utils/errors/errors";

interface NewLessonRecord extends Omit<LessonEntity, 'id'> {
    id?: string;
}

export class LessonRecord implements LessonEntity {
    id: string;
    createdAt: string;
    url: string;
    isImportant: number;

    constructor(obj: NewLessonRecord) {
        if (!obj.url || obj.url.length > 100) {
            throw new ValidationError('Tutorial url address must be between 1 and 100 characters long...')
        }

        this.url = obj.url
        this.createdAt = obj.createdAt
        this.isImportant = obj.isImportant
    }

}
