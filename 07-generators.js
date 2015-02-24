// generators
//

function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 6;
}

let bar = {
  [Symbol.iterator]() {
    return foo();
  }
};

for (let f of bar) {
  console.log(f);
}
