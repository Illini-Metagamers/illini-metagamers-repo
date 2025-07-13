import * as migration_20250713_052912_init from './20250713_052912_init';

export const migrations = [
  {
    up: migration_20250713_052912_init.up,
    down: migration_20250713_052912_init.down,
    name: '20250713_052912_init'
  },
];
