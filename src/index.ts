import * as _ from "lodash-es";

const harry = { lastName: "potter" };
const ron = { lastName: "weasley" };
const hermione = { lastName: "granger" };
const wizards = [harry, ron, hermione];

console.log(_.get(harry, "lastName"));
console.log(_.map(wizards, "lastName"));

const test = _.debounce(() => {
  console.log("harry potter");
}, 1000);

test();
test();
test();
test();
test();
