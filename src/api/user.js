const serviceUser = require("../services/user");

class ApiUser{
    FindAll(_, res){
        try {
            const result = serviceUser.FindAll()

            res.status(200).send({ result });
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    };
    
    FindByIndex(req, res){
        try {
            const { index } = req.params;
            const result = serviceUser.FindByIndex(index);
            res.status(200).send({ result });
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    };
    
    Create(req, res){
        try {
            const { name } = req.body;
            serviceUser.Create(name);
            res.status(201).send();
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    
        
    };
    
    Update(req, res){
        try {
            const { index } = req.params;
            const { name } = req.body;
            serviceUser.Update(index, name);

            const result = serviceUser.FindByIndex(index);

            res.status(200).send({ result });
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    };    

    Delete(req, res){
        try {
            const { index } = req.params;
            serviceUser.Delete(index);

            res.status(204).send({});
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    };    
}



module.exports = new ApiUser();