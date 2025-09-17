const knex = require('knex')(require('../../knexfile').development);

async function getAllShapes() {
  return await knex('Shapes').select('*');
}

module.exports = { getAllShapes };