import { Sequelize } from "sequelize";

const db = new Sequelize('db_culture', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;