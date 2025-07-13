import * as migration_20250713_053638_init from './20250713_053638_init';

export const migrations = [
  {
    up: migration_20250713_053638_init.up,
    down: migration_20250713_053638_init.down,
    name: '20250713_053638_init'
  },
];
