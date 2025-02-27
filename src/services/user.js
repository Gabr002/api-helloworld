const User = require("../model/user")


class ServiceUser{
    FindAll(){
        return User.FindAll();
    }

    FindByIndex(index){
        return User.FindByIndex(index);
    }

    Create(name){
        User.Create(name)
    }

    Update(index, name){
        User.Update(index, name);
    }

    Delete(index){
        User.Delete(index);
    }
}

module.exports = new ServiceUser();