import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize; 

const Budaya = db.define('Budaya',{
    nama_budaya: DataTypes.STRING,
    jenis_budaya: DataTypes.STRING,
    tempat_budaya: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Budaya;

(async() => {
    await db.sync();
})();