import { Model, RelationMappings } from 'objection'
import knex from '../db/knex'

Model.knex(knex)

export class CycleModel extends Model {
    cycleId!: number
    userId!: number
    cycleDuration!: number
    menstruationStarts!: Date
    bloodEnds!: Date
    fertileStarts!: Date
    ovulationDay!: Date
    infertileStarts!: Date

    static get tableName() {
        return 'cycles'
    }

    // static get relationMappings(): RelationMappings {
    //     return {
    //         coins: {
    //             relation: Model.ManyToManyRelation,
    //             modelClass: CoinModel,
    //             join: {
    //                 from: 'users.id',
    //                 through: {
    //                     from: 'user_coins.userId',
    //                     to: 'user_coins.coinId',
    //                     extra: ['price', 'amount'],
    //                 },
    //                 to: 'coins.id',
    //             },
    //         },
    //     }
    // }
}
