const config = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.DIALECT,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./ีuser.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.user_roles = require("./user_roles.model")(sequelize, Sequelize);

//Relationship (Many to Many)
db.role.belongsToMany(db.user, {
    through: "user_roles"
});
db.user.belongsToMany(db.role, {
    through: "user_roles"
});

module.exports = db;
