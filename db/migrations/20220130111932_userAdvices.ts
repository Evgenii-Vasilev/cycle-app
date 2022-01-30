import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('usersAdvices', table => {
        table.increments('userAdviceId')
        table.integer('userId').references('userId').inTable('users').notNullable()
        table.integer('adviceId').references('adviceId').inTable('advices').notNullable()
        table.date('date').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('usersAdvices')
}
