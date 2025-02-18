const express = require("express");
const { apiSomar, apiSubtrair, apiMultiplicar, apiDividir } = require("./api/operacoes");
const app = express();
const port = 3000;
app.use = (express.json());

app.post('/somar', apiSomar);
// app.post('/api/mul', apiSubtrair);
// app.post('/api/sub', apiMultiplicar);
// app.post('/api/div', apiDividir);

app.listen(port, () => {
    console.log('servidor rodando na porta ' + port)
})