# Api-Polling-System

## Introduction

Creating a **Polling System API** where anyone can create questions with options and also add votes to it. It is built
using Express, Nodejs, MongoDB.


## Routes & URL

- **/questions/create**
  <p> To create a new question hit the following URL with a post request:</p>
  https://polling-system-api-517c.onrender.com/api/questions/create

- **/options/:id/create**
  <p>To create a new option for a question hit the following URL with a post request:</p>
  https://polling-system-api-517c.onrender.com/api/questions/:idOfQuestion/options/create

- **/options/:id/addVote**
  <p>To increment the count of votes on an option, hit the following URL with a get request:</p>
  https://polling-system-api-517c.onrender.com/api/options/:idOfOption/addVote

- **/questions/:id**
  <p> To view a question and it’s options, hit the following URL with a get request:</p>
  https://polling-system-api-517c.onrender.com/api/questions/:idOfQuestion

- **/options/:id/delete**
  <p> To delete an option, hit the following URL with a delete request: </p>
  https://polling-system-api-517c.onrender.com/api/options/:idOfOption/delete

- **/questions/:id/delete**
  <p> To delete a question, hit the following URL with a delete request: </p>
  https://polling-system-api-517c.onrender.com/api/questions/:idOfQuestion/delete
  <br/>


## Requirements

For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.

If the installation was successful, you should be able to run the following command.

```
$ node --version

$ npm --version

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```
$ npm install npm -g
