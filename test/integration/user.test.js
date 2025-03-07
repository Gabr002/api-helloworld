const database = require('../../src/database')
const serviceUser = require('../../src/services/user')

describe("Tests for user", () => {

    beforeAll(async () => {
        this.transaction = await database.db.transaction();
    })
    afterAll(() => {
        this.transaction.rollback()
    })

    it("should create an user", async () => {
        const user = {
            email: "testemaildb@teste.com",
            password: 123456
        }

        const addUser = await serviceUser.Create(user.email, user.password, this.transaction);
        this.id = addUser.id

        expect(addUser.email).toBe(user.email);
        expect(addUser.password).toBe(user.password);
    })

    it("should update an user", async () => {
        const user = {
            id: this.id,
            email: "testemaildbalterado@teste.com",
            password: 123456
        }

        const updateUser = await serviceUser.Update(user.id, user.email, user.password, this.transaction);

        expect(updateUser.email).toBe(user.email);
        expect(updateUser.password).toBe(user.password);
    })

    it("should delete an user", async () => {
        const user = {
            id: this.id
        }

        const response = await serviceUser.Delete(user.id, this.transaction);

        expect(response).toBe(true);
    })
})