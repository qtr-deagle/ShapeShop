exports.seed = async function(knex) {
  await knex('Shapes').del();
  await knex('Shapes').insert([
    { Name: 'Plasma Cube', Price: 1000, Rarity: 'RARE' },
    { Name: 'Neon Pyramid', Price: 2500, Rarity: 'EPIC' },
    { Name: 'Sphere of Light', Price: 5000, Rarity: 'LEGENDARY' },
    { Name: 'Hexagonal Prism', Price: 7500, Rarity: 'MYTHIC' },
    { Name: 'Dark Square', Price: 10000, Rarity: 'ANCIENT' },
    { Name: 'Stack Circle', Price: 15000, Rarity: 'DIVINE' }
  ]);
};