const express = require("express");
const app = express();

let port = 3000;

app.get('/', function(req, res) {
    res.send('Test Server');
});

app.listen(port, function() {
    console.log(`Server is running on port - ${port}`);
});