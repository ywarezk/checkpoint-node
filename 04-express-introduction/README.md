## Express introduction

In this lesson we will start building our server using express

### Lesson Plan

- learn about express architecture
- creating express app and first middleware
- Different patterns regarding express middlewares
- using the above patterns to solve common server problems

### Student EX

- Create an express app that will respond to the following urls
  * /api/task/ - Will serve and create todo tasks
  * all other urls will static serve an index file
- the static index file will load a js file which will ajax request the todo tasks and display them on the page.
- The rest server should store the tasks data in a file
