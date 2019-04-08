## Express introduction

In this lesson we will start building our server using express

### Lesson Plan

- learn about express architecture
- creating express app and first middleware
- Different patterns regarding express middlewares
- using the above patterns to solve common server problems

### Student EX
- 
- todo task: {id: 1, title: 'hello world'}
- [{...}, {...}]
- Create an express app that will respond to the following urls
  * /api/task/ - Will serve and create todo tasks
  * all other urls will static serve an index file
- the static index file will load a js file which will ajax request the todo tasks and display them on the page.
- The rest server should store the tasks data in a file

### EX2

- In your ex folder create 2 folders using express-generator and create-react-app
- your express server will be connected to the static middleware and will serve the index.html from the build folder of the react app. 
- all urls will serve that build folder exception the urls that start with /api/
- create a REST for /api/login/ that will get a post request and send a jwt token
- use passport local strategy and jwt strategy
- create a REST for /api/task/ that will send the todo tasks
- the todo tasks and users will be hard coded arrays.
- your react app will contain a login page and a todo list page.

