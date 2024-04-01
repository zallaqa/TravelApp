const { getWeather } = require("../scripts/getWeather")

const now =new Date()

test("The Remining Days", () =>{
    expect(getWeather(now)).toBe(-0);
});