const knex = require('knex')(require('../../knexfile').development);

async function getAllCrystals() {
  return await knex('Crystals').select('*');
}

module.exports = { getAllCrystals };