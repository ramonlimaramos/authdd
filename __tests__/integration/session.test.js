
const { User } = require('../../src/app/models');

describe("Authentication", () => {
    it("insertion testing", async () => {
        const user = await User.create({
            name: "Ramos Ramos",
            email: "ramosramos@gmail.com",
            password_hash: "123123"
        });

        expect(user.email).toBe("ramosramos@gmail.com");
    });
});