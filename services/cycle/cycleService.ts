import { cloneDeep } from 'lodash'
import { Cycle } from '../../interfaces/cycle'

class CycleService {
    generateFirstCycle(data: Cycle): Cycle {
        const { userId, cycleDuration, menstruationStarts } = data
        const bloodEnds = this.getDayAfter(cycleDuration / 6, menstruationStarts)
        const fertileStarts = this.getDayAfter(cycleDuration / 3, menstruationStarts)
        const ovulationDay = this.getDayAfter(cycleDuration / 2, menstruationStarts)

        const infertileDaysAfterCycleStarts = cycleDuration >= 30 ? cycleDuration - 4 : cycleDuration - 3
        const infertileStarts = this.getDayAfter(infertileDaysAfterCycleStarts, menstruationStarts)
        return {
            userId,
            cycleDuration,
            menstruationStarts,
            bloodEnds,
            fertileStarts,
            ovulationDay,
            infertileStarts,
        }
    }

    generateNextCycle(cycle: Cycle): Cycle {
        const { userId, cycleDuration, menstruationStarts, bloodEnds, fertileStarts, ovulationDay, infertileStarts } =
            cycle

        const nextMenstruationStarts = this.getDayAfter(cycleDuration, menstruationStarts)
        const nextBloodEnds = this.getDayAfter(cycleDuration, bloodEnds)
        const nextFertileStarts = this.getDayAfter(cycleDuration, fertileStarts)
        const nextOvulationDay = this.getDayAfter(cycleDuration, ovulationDay)
        const nextInfertileStarts = this.getDayAfter(cycleDuration, infertileStarts)

        return {
            userId,
            cycleDuration,
            menstruationStarts: nextMenstruationStarts,
            bloodEnds: nextBloodEnds,
            fertileStarts: nextFertileStarts,
            ovulationDay: nextOvulationDay,
            infertileStarts: nextInfertileStarts,
        }
    }

    private getDayAfter(skipDays: number, date?: Date): Date {
        if (date) {
            const newDate = cloneDeep(date)
            const days = date.getDate() + skipDays
            return new Date(newDate.setDate(days))
        }
        const dateNumber = new Date(Date.now()).getDate() + skipDays
        return new Date(new Date().setDate(dateNumber))
    }
}

export const cycleService = new CycleService()
