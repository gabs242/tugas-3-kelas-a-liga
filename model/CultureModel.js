import { Sequelize } from "sequelize";
import db from '../config/Database.js';

const { DataTypes } = Sequelize; 

const Budaya = db.define('Budaya',{

    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
    },

    nama_budaya: {
        type: DataTypes.STRING,
        allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },

    jenis_budaya: {
        type: DataTypes.STRING,
        allowNull: false,
    validate: {
        notEmpty: true,
      },
    },

    tempat_budaya: {
        type: DataTypes.STRING,
        allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

    image: DataTypes.STRING,
    url: DataTypes.STRING,

}, {
    freezeTableName: true
});

export default Budaya;