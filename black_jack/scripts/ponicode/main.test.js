const rewire = require("rewire")
const main = rewire("../main")
const createDeck = main.__get__("createDeck")
// @ponicode
describe("createDeck", () => {
    test("0", () => {
        createDeck()
    })
})
