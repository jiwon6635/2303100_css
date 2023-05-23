import {sum, substract, multiply, divide } from "../myFunctions/do-some-math";

test("Math functions test", () => {
    it("두가지 값을 더합니다.", () => {
        expect(sum(1,1), toBe(2))
    }); 
})