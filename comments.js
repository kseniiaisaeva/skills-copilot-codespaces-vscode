// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file through a GET request to the /comments route. Use the Express framework to create the server.

// The comments.json file is an array of objects, each with a name and comment property. For example:

// [
//   {
//     "name": "John Doe",
//     "comment": "This is a comment"
//   },
//   {
//     "name": "Jane Doe",
//     "comment": "This is another comment"
//   }
// ]
// The server should read the comments.json file and send the contents of the file as a response to the GET request to the /comments route.

// The server should respond with the contents of comments.json as a JSON response.

// The server should respond with a 404 status code if the /comments route is not found.

// The server should respond with a 500 status code if there is an error reading the comments.json file.

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json file');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});