import {LessonRecord} from "./lesson.record";
import {pool} from "../../utils/database/db";

afterAll(async () => {
    await pool.end()
})


const defaultObj = {
    link: 'iEPK5fppX8w',
    createdAt: '9999-12-31 23:59:59',
    isImportant: 1,
    title: 'Test Title',
    description: 'Test Description',
    videoId: 'Test VideoId',
    author: 'Test Author',
    thumbnail: 'Test Thumb',
    userId: 'aaaa'

}

test('Can build LessonRecord', () => {
    const lesson = new LessonRecord(defaultObj)
    expect(lesson.link).toBe('iEPK5fppX8w')
    expect(lesson.createdAt).toBe('9999-12-31 23:59:59')
    expect(lesson.isImportant).toBe(1)
})

test('Validates invalid link', () => {
    expect(() => new LessonRecord({
        ...defaultObj,
        link: ''
    })).toThrow('Tutorial link address must be between 1 and 100 characters long...')
})


test('LessonRecord returns data from database for one entry.', async () => {
    const lesson = await LessonRecord.getOne('abc')

    expect(lesson).toBeDefined()
    expect(lesson.id).toBe('abc')
    expect(lesson.link).toBe('iEPK5fppX8w')

})

test('LessonRecord.getOne returns null for not existing entry.', async () => {
    const lesson = await LessonRecord.getOne('------------')

    expect(lesson).toBeNull()
})

test('LessonRecord.findAll returns all lessons for particular user', async () => {
    const lessons = await LessonRecord.findAll('aaaa')

    expect(lessons).not.toEqual([])
    expect(lessons[0].id).toBeDefined()
})

test('LessonRecord.insert creates new lesson in database', async () => {
    const lesson = new LessonRecord({
        link: 'iEPK5fppX8w',
        createdAt: '9999-12-31 23:59:59',
        isImportant: 0,
        ...defaultObj
    })
    await lesson.insert()

    const foundedLesson = await LessonRecord.getOne(lesson.id)
    expect(foundedLesson).toBeDefined()
    expect(foundedLesson).not.toBeNull()
    expect(foundedLesson.id).toBe(lesson.id)
})
