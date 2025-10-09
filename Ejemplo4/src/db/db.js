// src/db/db.js

const dataPokemon = [
  {
    "id": 1,
    "nombre": "bulbasaur",
    "tipos": ["grass", "poison"],
    "stats_base": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 45
    },
    "habilidades": ["overgrow", "chlorophyll"],
    "peso_kg": 6.9,
    "altura_m": 0.7
  },
  {
    "id": 4,
    "nombre": "charmander",
    "tipos": ["fire"],
    "stats_base": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 65
    },
    "habilidades": ["blaze", "solar-power"],
    "peso_kg": 8.5,
    "altura_m": 0.6
  },
  {
    "id": 7,
    "nombre": "squirtle",
    "tipos": ["water"],
    "stats_base": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 64,
      "speed": 43
    },
    "habilidades": ["torrent", "rain-dish"],
    "peso_kg": 9.0,
    "altura_m": 0.5
  }
];

export default dataPokemon;