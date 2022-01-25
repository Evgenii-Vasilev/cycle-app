import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('userId')
        table.string('login').notNullable()
        table.string('password').notNullable()
        table.boolean('isFollower')
        table.integer('subscriberId').references('userId')
        // table.enu('lastAdvices', ['number'])
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}
