export interface Cycle {
    userId: number
    cycleDuration: number
    menstruationStarts: Date
    bloodEnds?: Date
    fertileStarts?: Date
    ovulationDay?: Date
    infertileStarts?: Date
}
