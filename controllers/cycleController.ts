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
            res.json()
            console.log('† e', e)
        }
    }

    async generateNextCycle(req: Request, res: Response) {
        try {
            const userId = req.body.userId
            const lastCycle = await CycleModel.query().where({ userId }).orderBy('infertileStarts', 'DESC').first()
            if (lastCycle) {
                const nextCycle = cycleService.generateNextCycle(lastCycle)
                await CycleModel.query().insertAndFetch(nextCycle)
                return res.json(nextCycle)
            } else {
                throw new Error('There are no cycles')
            }
        } catch (e) {
            res.json()
            console.log('† e', e)
        }
    }

    async editCycleDuration(req: Request, res: Response) {
        try {
            const { cycleId, cycleDuration } = req.body
            await CycleModel.query().findById(cycleId).patch({ cycleDuration })
            res.json(true)
        } catch (e) {
            res.json()
            console.log('† e', e)
        }
    }
}

export const cycleController = new Cycle()
