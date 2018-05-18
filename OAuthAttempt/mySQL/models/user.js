

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a userName of type STRING
    userName: DataTypes.STRING
  });

  User.associate = function(models) {
    // Associating User with Books
    // When an User is deleted, also delete any associated Books
    User.hasMany(models.Book, {
      onDelete: "cascade"
    });
  };

  return User;
};
