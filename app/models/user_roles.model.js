module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("user_roles", {
        userID: Sequelize.INTEGER,
        roleID: Sequelize.INTEGER
    });
    return UserRole;
}