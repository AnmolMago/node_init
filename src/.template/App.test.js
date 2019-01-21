var App = require("./App");

it("returns the meaning of life", () => {
  console.log(App);
  expect(new App().meaningOfLife()).toBe(42);
});
