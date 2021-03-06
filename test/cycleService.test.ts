import test from 'ava'
import { cycleService } from '../services/cycle/cycleService'
import { Cycle } from '../interfaces/cycle'

const mockFirstCycle: Cycle = {
    userId: 1,
    cycleDuration: 30,
    menstruationStarts: new Date('2021-12-23'),
    bloodEnds: new Date('2021-12-28'),
    fertileStarts: new Date('2022-01-02'),
    ovulationDay: new Date('2022-01-07'),
    infertileStarts: new Date('2022-01-18'),
}

const mockArguments: Cycle = {
    userId: mockFirstCycle.userId,
    cycleDuration: mockFirstCycle.cycleDuration,
    menstruationStarts: mockFirstCycle.menstruationStarts,
}

test('Generate first cycle', t => {
    t.deepEqual(cycleService.generateFirstCycle(mockArguments), mockFirstCycle)
})

test('Generate next cycle', t => {
    const nextCycle: Cycle = {
        userId: 1,
        cycleDuration: 30,
        menstruationStarts: new Date('2022-01-22'),
        bloodEnds: new Date('2022-01-27'),
        fertileStarts: new Date('2022-02-01'),
        ovulationDay: new Date('2022-02-06'),
        infertileStarts: new Date('2022-02-17'),
    }
    t.deepEqual(cycleService.generateNextCycle(mockFirstCycle), nextCycle)
})
