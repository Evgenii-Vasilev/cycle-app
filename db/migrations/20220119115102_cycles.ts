import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cycles', table => {
        table.increments()
        table.integer('userId').references('id').inTable('users')
        table.date('menstruationStarts')
        table.date('bloodEnds')
        table.date('fertileStarts')
        table.date('infertileStarts')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cycles')
}

