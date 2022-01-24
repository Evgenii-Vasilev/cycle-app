import { generateFirstCycleRequestDto } from '../interfaces/cycles'

class CycleService {
    generateFirstCycle({ userId, menstruationStarts, cycleDuration }: generateFirstCycleRequestDto) {
        const bloodEnds = this.getDayAfter(cycleDuration / 5, menstruationStarts)

        const fertileStarts = this.getDayAfter(cycleDuration / 3, menstruationStarts)

        const ovulationDay = this.getDayAfter(cycleDuration / 2, menstruationStarts)

        const pmsDuration = cycleDuration >= 30 ? cycleDuration - 4 : cycleDuration - 3
        const pmsStarts = this.getDayAfter(pmsDuration)
        return {
            userId,
            cycleDuration,
            menstruationStarts,
            bloodEnds,
            fertileStarts,
            ovulationDay,
            pmsStarts,
        }
    }

    private getDayAfter(skipDays: number, date?: Date) {
        if (date) {
            const dateNumber = date.getDate() + skipDays
            return new Date(new Date().setDate(dateNumber))
        }
        const dateNumber = new Date(Date.now()).getDate() + skipDays
        return new Date(new Date().setDate(dateNumber))
    }
}

export const cycleService = new CycleService()
