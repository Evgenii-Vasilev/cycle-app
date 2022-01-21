import { Knex } from 'knex'

interface Config {
    test: Knex.Config
    development: Knex.Config
}

const config: Config = {
    test: {
        client: 'pg',
        connection: 'postgres://localhost/test_db',
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/test',
        },
    },
    development: {
        client: 'pg',
        connection: 'postgres://postgres:@localhost:5432/cycle_app',
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/development',
        },
    },
}
export default config
