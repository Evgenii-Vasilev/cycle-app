import { Model, RelationMappings } from 'objection'
import knex from '../db/knex'

Model.knex(knex)

export class UserAdviceModel extends Model {
    userId!: number
    adviceId!: number
    date!: Date

    static get idColumn() {
        return 'userAdviceId'
    }

    static get tableName() {
        return 'usersAdvices'
    }
}
