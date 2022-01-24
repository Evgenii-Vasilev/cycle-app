import express from 'express'
import { cycleRouter } from './routes/cycleRouter'
import { userRouter } from './routes/userRouter'

const PORT = 3000
const API = '/api'

const app = express()

app.use(express.json())
app.use(API, userRouter)
app.use(API, cycleRouter)

app.get('/', (req, res) => {
    res.send('<h1 style="color: lightblue">Hello World</h1>')
})

app.listen(PORT, () =>
    console.log(`App running on port: http://localhost:${PORT}`)
)
