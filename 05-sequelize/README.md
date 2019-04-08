## Node Express ORM and database

In this lesson we will go over connecting our node to a database and abstracting the tables using sequelize ORM

### EX

- Using express generator start a new express application
- using sequelize cli create a sequelize connection in your project
- Create 2 sequelize models one for todo task and one for tags
- those models should have a M2M relation
- Create migration for those tables (make sure the models are suffixed with your name to not override other people tables)
- Create a REST server to serve the todo task and the tags
- Only authenticated users can view those API's so create another api for login and on success you will return a response of the jwt token
- The users should be taken from a hard coded array
- Bonus: create a react app that will implement the login and show the todo list