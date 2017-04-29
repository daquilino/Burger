# Pizza Logger
Pizza logger made with MySQL, Node, Express, Handlebars and a homemade ORM following the MVC design pattern.


#### Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── pizzas_controller.js
│
├── db
│   ├── heroku-jawsdb-schema.sql
│   ├── schema.sql
│   └── seeds.sql
│
├─ .gitignore
│
├── models
│   └── pizza.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       └── img
│           └── pizza.png
│
├── README.md   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
``` 


## Built With

* [Sublime Text](https://www.sublimetext.com/) - Text Editor.
* [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [MySQL](https://www.mysql.com/) - Open Source SQL Database.

###### NPM Packages

* [express](https://www.npmjs.com/package/express)	- Node.js web application framework that provides a robust set of features for web and mobile applications.
* [body-parser]() - Node.js body parsing middleware.
* [mysql](https://www.npmjs.com/package/mysql)	- This is a node.js driver for mysql.
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - A Handlebars view engine for Express.
* [method-override](https://www.npmjs.com/package/method-override) - Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.


## Author

* **Douglas Aquilino** - [https://github.com/daquilino](https://github.com/daquilino)



All the recommended files and directories from the steps above should look like the following structure:

```
	.
	├── config
	│   ├── connection.js
	│   └── orm.js
	│ 
	├── controllers
	│   └── burgers_controller.js
	│
	├── db
	│   ├── schema.sql
	│   └── seeds.sql
	│
	├── models
	│   └── burger.js
	│ 
	├── node_modules
	│ 
	├── package.json
	│
	├── public
	│   ├── assets
	│   │   ├── css
	│   │   │   └── burger_style.css
	│   │   └── img
	│   │       └── burger.png
	│   └── test.html
	│
	├── server.js
	│
	└── views
	    ├── index.handlebars
	    └── layouts
	        └── main.handlebars
```

- - -

### One More Thing