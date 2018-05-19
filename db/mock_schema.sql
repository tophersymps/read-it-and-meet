DROP DATABASE IF EXISTS books_db;

CREATE DATABASE books_db;

USE books_db;

-- Create the table burgers.
CREATE TABLE bookss (
  id int AUTO_INCREMENT,
  book_name varchar(100) NOT NULL,
  book_author varchar(100) NOT NULL,
  book_google_id varchar(100) NOT NULL,
  PRIMARY KEY(book_google_id)
);