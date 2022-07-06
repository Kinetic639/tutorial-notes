import express, {json, Router} from "express";
import cors from "cors";
import 'express-async-errors'
import {handleError} from "./utils/errors/errors";
import rateLimit from 'express-rate-limit'
import {config} from "./config/config";

const app = express()

app.use(cors({
    origin: config.corsOrigin
}))

app.use(json())
app.use(rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)

}))


//Routes
// const router = Router()

// router.use('/lesson', adRouter)

// app.use('/api', router)

app.use(handleError);
const port = 3001

app.get('/api', (req, res) => {
    res.send(`Mega ogłoszenia running on ${port}`);
});
app.listen(port, '0.0.0.0', () => {
    console.log(`listening on http://localhost:${port}/api`)
})

