import { Model, RelationMappings } from 'objection'
import knex from '../db/knex'

Model.knex(knex)

export class AdviceModel extends Model {
    title!: string
    text!: string
    phase!: number

    static get idColumn() {
        return 'adviceId'
    }

    static get tableName() {
        return 'advices'
    }
}
