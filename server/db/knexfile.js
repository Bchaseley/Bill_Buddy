// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  production: {
    client: 'postgresql',
    connection: {
      database: 'bill_buddy',
      user:     'postgres',
      password: 'Leet1337?!'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  }

};
