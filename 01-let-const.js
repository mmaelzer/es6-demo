// var: function scoped variable
var log = console.log;

// let: block scoped variable
// const: block scoped constant



var globalVar = 'Frank';

// block
if (true) {

  const thisDude = 'dude';
  var blockVar = 'Frank from block';
  const obj = {a: 1};
  obj['b'] = 2;

  log(obj);
}

// function scope
(function anon() {

  var funcVar = 'Frank from func';
  // log('inside', anon.name, globalVar);
})();


// log(globalVar);
// log(blockVar);
// console.log(funcVar);

