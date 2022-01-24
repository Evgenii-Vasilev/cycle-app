import { Router } from 'express'
import { cycleController } from '../controllers/cycleController'

export const cycleRouter = Router()

cycleRouter.post('/cycle/generate-first', cycleController.generateFirstCycle)
