const person = require("../model/person");


class ServicePerson{

    async FindAll({ transaction }){
        return person.findAll({ transaction });
    }
    
    async FindById(id, transaction) {
        return person.findByPk(id, {transaction});
    }

    async Create(name, address, userId, transaction){
        if(!name){
            throw new Error("Please, enter your name");
        }else if(!address){
            throw new Error("Please, enter your address");
        }else if(!userId){
            throw new Error("Please, enter your userId");
        }

        return person.create({
            name, address, userId
        }, { transaction });
    }

    async Update(id, name, address, transaction){
        const oldPerson = await this.FindById(id, transaction);

        oldPerson.name = name || oldPerson.name;
        oldPerson.address = address || oldPerson.address;

        oldPerson.save({ transaction });

        return oldPerson;
    }

    async Delete(id, transaction){
        const person = await this.FindById(id, transaction);
        person.destroy({ transaction });

        return true;
    }
}

module.exports = new ServicePerson();