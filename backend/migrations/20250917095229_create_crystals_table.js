exports.up = function(knex) {
  return knex.schema.createTable('Crystals', (table) => {
    table.string('Name').notNullable();
    table.decimal('Price', 10, 2).notNullable();
    table.integer('Receive').notNullable();
    table.integer('Bonus').notNullable();
    table.integer('TotalReceive').notNullable();
    table.string('Tier').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Crystals');
};