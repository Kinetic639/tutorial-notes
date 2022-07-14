import {LessonEntity, NewLessonRecord} from "../../types";
import {ValidationError} from "../../utils/errors/errors";
import {pool} from "../../utils/database/db";
import {FieldPacket} from "mysql2";

type AdRecordResults = [LessonEntity[], FieldPacket[]]

export class LessonRecord implements LessonEntity {
    id: string;
    createdAt: string;
    url: string;
    isImportant: number;
    userId: 'aaaa'

    constructor(obj: NewLessonRecord) {
        if (!obj.url || obj.url.length > 100) {
            throw new ValidationError('Tutorial url address must be between 1 and 100 characters long...')
        }
        this.id = obj.id
        this.url = obj.url
        this.createdAt = obj.createdAt
        this.isImportant = obj.isImportant
    }

    static async getOne(id: string): Promise<LessonRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `lessons` WHERE id = :id", {
            id,
        }) as AdRecordResults;

        return results.length === 0 ? null : new LessonRecord(results[0])
    }
}
