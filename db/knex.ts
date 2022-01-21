import knex from 'knex'
import knexfile from '../knexfile'

var environment = process.env.NODE_ENV || 'development'
var config = knexfile[environment]

export default knex(config)
