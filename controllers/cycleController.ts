import { Request, Response } from 'express'
import { GenerateFirstCycleRequestDto } from 'interfaces/cycles'
import { CycleModel } from '../models/CycleModel'
import { cycleService } from '../services/cycle/cycleService'

class Cycle {
    generateFirstCycle(req: Request, res: Response) {
        req.body.menstruationStarts = new Date(req.body.menstruationStarts)
        const firstCycle = cycleService.generateFirstCycle(req.body)
        // CycleModel.query().insert(firstCycle)
        res.json(firstCycle)
    }

    async createFirstCycle(req: Request, res: Response) {
        // await CycleModel.query().insert()
    }
}

export const cycleController = new Cycle()
