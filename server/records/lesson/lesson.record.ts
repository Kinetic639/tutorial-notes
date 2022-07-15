import {LessonEntity, NewLessonRecord} from "../../types";
import {ValidationError} from "../../utils/errors/errors";
import {pool} from "../../utils/database/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';

type AdRecordResults = [LessonEntity[], FieldPacket[]]

export class LessonRecord implements LessonEntity {
    id: string;
    createdAt: string;
    url: string;
    isImportant: number;
    userId: string;

    constructor(obj: NewLessonRecord) {
        if (!obj.url || obj.url.length > 100) {
            throw new ValidationError('Tutorial url address must be between 1 and 100 characters long...')
        }
        this.id = obj.id
        this.url = obj.url
        this.createdAt = obj.createdAt
        this.isImportant = obj.isImportant
        this.userId = obj.userId
    }


    static async getOne(id: string): Promise<LessonRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `lessons` WHERE `id` = :id", {
            id,
        }) as AdRecordResults;

        return results.length === 0 ? null : new LessonRecord(results[0])
    }

    static async findAll(userId: string): Promise<LessonRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `lessons` WHERE `userId` = :userId", {
            userId,
        }) as AdRecordResults;

        return results.map(result => new LessonRecord(result))
    }

    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid()
        } else {
            throw new Error('Cannot insert something already inserted...')
        }

        await pool.execute("INSERT INTO `lessons`(`id`, `url`,`createdAt`, `isImportant`, `userId`) VALUES(:id, :url,:createdAt, :isImportant, :userId)", this)
    }
}
