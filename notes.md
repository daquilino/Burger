# models
	- burger.js -> burger object
		reqiures orm.js
		contains methods that use orms

# config
	-connection.js -> requires mysql
	- orm.js -> requires connection.js

# controllers - contains routes
	-burgers_controller.js -> requires models/burgers.js, express


server.js
	requires
		- express
		- module-overide
		- body-parser
		- handlebars
		- burgers_controller.js
		


//dependency flow
connections.js => orm.js => burger.js => burgers_controller.js => server.js		

	