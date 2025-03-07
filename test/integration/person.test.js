
const database = require("../../src/database");
const servicePerson = require("../../src/services/person");

describe("Tests for person", () => {

    beforeAll(async () => {
        this.transaction = await database.db.transaction();
    })

    afterAll(() => {
        this.transaction.rollback()
    })

    it("Should create an person", async () => {
        const person = {
            name: "dantas",
            address: "Rua Joseph ruston",
            userId: 1,
        }

        const addPerson = await servicePerson.Create(person.name, person.address, person.userId, this.transaction);
        this.id = addPerson.id;

        expect(addPerson.name).toBe(person.name);
        expect(addPerson.address).toBe(person.address);
    })

    it("Should update an person", async () => {
        const person = {    
            id: this.id,
            name: "Lopes",
            address: "Rua jorge pharm"
        }

        const updatePerson = await servicePerson.Update(person.id, person.name, person.address, this.transaction);

        expect(updatePerson.name).toBe(person.name);
        expect(updatePerson.address).toBe(person.address);
    })

    it("Should delete an person", async () => {
        const person = {
            id: this.id
        }

        const response = await servicePerson.Delete(person.id, this.transaction);

        expect(response).toBe(true);
    })
})