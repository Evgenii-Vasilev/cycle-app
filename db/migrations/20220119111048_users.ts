import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('userId')
        table.string('login').notNullable()
        table.string('password').notNullable()
        table.boolean('isFollower')
        table.integer('subscriberId').references('id')
        table.enu('lastAdvices', [1, 2, 3]).defaultTo([0, 0, 0])
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}
