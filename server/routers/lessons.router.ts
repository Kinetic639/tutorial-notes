import {Router} from "express";
import {LessonRecord} from "../records/lesson/lesson.record";


export const lessonRouter = Router()

    .get('/:user', async (req, res) => {

        const lessons = await LessonRecord.findAll(req.params.user)
        res.json(lessons)
    })
    .get('/:user/:id', async (req, res) => {

        const lesson = await LessonRecord.getOne(req.params.id)
        res.json(lesson)
    })

    .post('/', async (req, res) => {
        const lesson = new LessonRecord(req.body)
        await lesson.insert()
        res.json(lesson)
    })
