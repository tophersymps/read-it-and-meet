module.exports = function(sequelize, Sequelize) {
 
    var User_books = sequelize.define('user_books', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        user_id: {
            type: Sequelize.INTEGER,
        },
        
        book_id: {
            type: Sequelize.INTEGER,
        },
        
        read_status: {
            type: Sequelize.BOOLEAN,
        }
 
    });
 
    return User_books;
 
}



