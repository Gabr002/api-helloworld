const express = require("express");
const { apiSomar, 
        apiSub, 
        apiMult, 
        apiDiv
    } = require("./api/operacoes");
const app = express();
const port = 3000;
app.use(express.json());

app.post('/somar', apiSomar);

app.post('/sub', apiSub);

app.post('/mult', apiMult);

app.post('/div', apiDiv);

app.listen(port, () => {
    console.log('servidor rodando na porta ' + port)
})