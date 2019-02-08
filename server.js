const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/templates/sample.html");
});

app.listen(4000, () => console.log("Server Running"));