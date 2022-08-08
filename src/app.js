const express = require("express");
const cors = require("cors");
const app = express();

let port = 3001;

app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send({
        test: "TEST"
    });
});

const router = require('./api/index.js');
app.use('/api', router);

app.listen(port, function() {
    console.log(`Server is running on port - ${port}`);
});