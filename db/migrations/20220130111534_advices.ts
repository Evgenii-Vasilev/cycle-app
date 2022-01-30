import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('advices', table => {
        table.increments('adviceId')
        table.string('title')
        table.string('text')
        table.integer('phase').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('advices')
}
