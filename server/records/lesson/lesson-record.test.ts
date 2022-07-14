import {LessonRecord} from "./lesson.record";

const defaultObj = {
    url: 'https://www.youtube.com/watch?v=iEPK5fppX8w&ab_channel=WebDevSimplified',
    createdAt: '9999-12-31 23:59:59.999999',
    isImportant: 0
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
