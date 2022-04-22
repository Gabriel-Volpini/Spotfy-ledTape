const express = require('express')

const app = express();

app.use('/', express.static("public"));

app.listen(8080, () => console.log("Cliente rodando na URl http://localhost:8080/ no navegador"))