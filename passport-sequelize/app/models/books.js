module.exports = function(sequelize, Sequelize) {
 
    var Books = sequelize.define('books', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        google_id: {
            type: Sequelize.STRING,
        },
 
    });
 
    return Books;
 
}