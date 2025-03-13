// Async / Await
// O async/await simplifica o código assíncrono, tornando-o mais fácil de ler e manter, ao mesmo tempo que mantém a capacidade
// de controlar o fluxo de execução e lidar com erros de maneira eficaz


// É para esse tipo de situação que existem as Promises
// Quando enviamos uma requisição de dados a uma API, temos uma promessa de que estes dados irão chegar, mas enquanto isso não acontece , sistema deve continuar aguardando.

const serviceUser = require("../services/user");

class ApiUser{
    async FindAll(_, res){
        try {
            const result = await serviceUser.FindAll()

            res.status(200).send({ result });
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    };
    
    async FindById(req, res){
        try {
            const { id } = req.params;
            const result = await serviceUser.FindById(id);
            res.status(200).send({ result });
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    };
    
    async Create(req, res){
        try {
            const { email, password } = req.body;
            await serviceUser.Create( email, password);
            res.status(201).send();
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    
        
    };
    
    async Update(req, res){
        try {
            const { id } = req.params;
            const { email, password } = req.body;
            const result = await serviceUser.Update(id, email, password);

            res.status(200).send({ result });
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    };    

    async Delete(req, res){
        try {
            const { id } = req.params;
            
            res.status(204).send({});
            await serviceUser.Delete(id);
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    };   
    
    async Login(req, res){
        try{
            const { email, password } = req.body;
            const token = await serviceUser.Login(email, password);

            res.status(200).send({ token })
        }catch(e){
            res.status(500).send({ msg: e.message })
        }
    }
}



module.exports = new ApiUser();