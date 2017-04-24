-- Use for MySQL
-- Don't use for Heroku JAWSDB
CREATE DATABASE burgers_db;

-- For Heroku JAWSBD use given database name
USE burgers_db;

-- Creates the table plans.
CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(256) NOT NULL,
	devoured BOOLEAN NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);
