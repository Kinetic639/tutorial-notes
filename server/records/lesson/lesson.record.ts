import {LessonEntity, NewLessonRecord} from "../../types";
import {ValidationError} from "../../utils/errors/errors";
import {pool} from "../../utils/database/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';

type AdRecordResults = [LessonEntity[], FieldPacket[]]

export class LessonRecord implements LessonEntity {
    id: string;
    createdAt: string;
    isImportant: number;
    userId: string;
    videoId: string;
    thumbnail: string;
    title: string;
    author: string;
    description: string;
    link: string;

    constructor(obj: NewLessonRecord) {
        if (!obj.link || obj.link.length > 100) {
            throw new ValidationError('Tutorial link address must be between 1 and 100 characters long...')
        }

        this.id = obj.id
        this.createdAt = obj.createdAt
        this.isImportant = obj.isImportant
        this.userId = obj.userId
        this.videoId = obj.videoId
        this.thumbnail = obj.thumbnail
        this.title = obj.title
        this.author = obj.author
        this.description = obj.description
        this.link = obj.link
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

        await pool.execute("INSERT INTO `lessons`(`id`,`videoId`,`thumbnail`, `title`,  `author`, `description`,`createdAt`, `isImportant`, `link`,`userId`) VALUES(:id, :videoId, :thumbnail, :title, :author, :description, :createdAt, :isImportant, :link, :userId)", this)
    }
}

