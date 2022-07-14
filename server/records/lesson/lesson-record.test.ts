import {LessonRecord} from "./lesson.record";

const defaultUser = {
    id: 'aaaa'
}

const defaultObj = {
    url: 'https://www.youtube.com/watch?v=iEPK5fppX8w&ab_channel=WebDevSimplified',
    createdAt: '9999-12-31 23:59:59.999999',
    isImportant: 0,
    userId: defaultUser.id,
}

test('Can build LessonRecord', () => {
    const lesson = new LessonRecord(defaultObj)
    expect(lesson.url).toBe('https://www.youtube.com/watch?v=iEPK5fppX8w&ab_channel=WebDevSimplified')
    expect(lesson.createdAt).toBe('9999-12-31 23:59:59.999999')
    expect(lesson.isImportant).toBe(0)
})

test('Validates invalid url', () => {
    expect(() => new LessonRecord({
        ...defaultObj,
        url: ''
    })).toThrow('Tutorial url address must be between 1 and 100 characters long...')
})


test('LessonRecord returns data from database for one entry.', async () => {
    const lesson = await LessonRecord.getOne('abc')

    console.log(lesson)

    expect(lesson).toBeDefined()
    expect(lesson.id).toBe('abc')
    expect(lesson.url).toBe('https://www.youtube.com/watch?v=iEPK5fppX8w&ab_channel=WebDevSimplified')

})

test('LessonRecord returns null for not existing entry.', async () => {
    const lesson = await LessonRecord.getOne('------------')

    expect(lesson).toBeNull()
})
