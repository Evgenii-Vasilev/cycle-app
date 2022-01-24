import { Model, RelationMappings } from 'objection'
import knex from '../db/knex'

Model.knex(knex)

export class UserModel extends Model {
    id!: number
    login!: string
    password!: string
    isFollower!: boolean
    subscriberId!: number
    lastAdvices!: number[]

    static get tableName() {
        return 'users'
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
