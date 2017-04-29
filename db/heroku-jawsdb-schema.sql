-- Template Schema for JAWSDB Heroku Table

-- For Heroku JAWSBD use supplied database name
USE ;

-- Create the table plans.
CREATE TABLE pizzas
(
	id INT AUTO_INCREMENT NOT NULL,
	pizza_name VARCHAR(256) NOT NULL,
	devoured BOOLEAN NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);


