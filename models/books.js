module.exports = function(sequelize, Sequelize) {
 
    var Books = sequelize.define('books', {
 
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