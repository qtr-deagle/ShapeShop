exports.seed = async function(knex) {
  await knex('Crystals').del();
  await knex('Crystals').insert([
    { Name: 'BASIC PACK', Price: 2.99, Receive: 1000, Bonus: 0, TotalReceive: 1000, Tier: 'basic' },
    { Name: 'BASIC PACK', Price: 6.99, Receive: 3000, Bonus: 250, TotalReceive: 3250, Tier: 'basic' },
    { Name: 'RARE PACK', Price: 8.99, Receive: 4500, Bonus: 400, TotalReceive: 4900, Tier: 'rare' },
    { Name: 'EPIC PACK', Price: 9.99, Receive: 6500, Bonus: 600, TotalReceive: 7100, Tier: 'epic' },
    { Name: 'COSMIC PACK', Price: 12.99, Receive: 9500, Bonus: 1000, TotalReceive: 10500, Tier: 'cosmic' },
    { Name: 'COSMIC PACK', Price: 15.99, Receive: 12500, Bonus: 1500, TotalReceive: 14000, Tier: 'cosmic' }
  ]);
};