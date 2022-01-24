import { cloneDeep } from 'lodash'
import { Cycle, GenerateFirstCycleRequestDto } from '../../interfaces/cycles'

class CycleService {
    generateFirstCycle({ userId, menstruationStarts, cycleDuration }: GenerateFirstCycleRequestDto): Cycle {
        const bloodEnds = this.getDayAfter(cycleDuration / 5 - 1, menstruationStarts)
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

    private getDayAfter(skipDays: number, date?: Date) {
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
