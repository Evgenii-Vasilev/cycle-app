import { Request, Response } from 'express'
import { CycleModel } from '../models/CycleModel'
import { cycleService } from '../services/cycle/cycleService'

class Cycle {
    async generateFirstCycle(req: Request, res: Response) {
        try {
            const firstCycle = cycleService.generateFirstCycle(req.body)
            await CycleModel.query().insert(firstCycle)
            res.json(firstCycle)
        } catch (e) {
            res.json(false)
            console.log('† e', e)
        }
    }

    async generateNextCycle(req: Request, res: Response) {
        try {
            const userId = req.body.userId
            const lastCycle = await CycleModel.query().whereColumn('userId', '=', userId).orderBy('infertileStarts')
            const nextCycle = cycleService.generateNextCycle(lastCycle[0])
            // await CycleModel.query().insert(nextCycle)
            res.json(nextCycle)
        } catch (e) {
            res.json(false)
            console.log('† e', e)
        }
    }
}

export const cycleController = new Cycle()
