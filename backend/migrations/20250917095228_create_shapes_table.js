exports.up = function(knex) {
  return knex.schema.createTable('Shapes', (table) => {
    table.string('Name').notNullable();
    table.integer('Price').notNullable();
    table.string('Rarity').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Shapes');
};