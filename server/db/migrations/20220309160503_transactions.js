/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('transactions', (table) => {
        table.increments();
        table.string('name').notNullable().index();
        table.string('amount');
        table.string('datePaid').notNullable().index();
        table.integer('user_id').references('id').inTable('users');
        table.timestamps();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('transactions');
};
