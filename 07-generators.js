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

let boo = foo();
console.log(boo.next());
console.log(boo.next());

for (let f of bar) {
  console.log(f);
}

