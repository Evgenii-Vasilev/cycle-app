import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cycles', (table) => {
        table.increments('cycleId')
        table.integer('userId').references('userId').inTable('users')
        table.integer('cycleDuration')
        table.date('menstruationStarts')
        table.date('bloodEnds')
        table.date('fertileStarts')
        table.date('ovulationDay')
        table.date('infertileStarts')
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cycles')
}
