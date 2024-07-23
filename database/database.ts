import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('stock-db', 'postgres', 'frijolito321', {
  host: 'localhost',
  dialect: 'postgres',
});