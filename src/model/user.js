const users = new Array("Jão", "Ana", "Joe");

class User{
    FindAll(){
        return users;
    }

    FindByIndex(index){
        return users[index];
    }

    Create(name){
        return users.push(name);
    }

    Update(index, name){
        return users[index] = name;
    }

    Delete(index){
        users.splice(index, 1);
    }
}

module.exports = new User();