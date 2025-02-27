const express = require("express");
const router = require("./src/routes/operacoes");
const app = express();
const port = 3000;
app.use(express.json());

app.use('/api/v1/user', router)

app.listen(port, () => {
    console.log('servidor rodando na porta ' + port)
})