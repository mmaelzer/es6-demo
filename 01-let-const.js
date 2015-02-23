// var: function scoped variable
var log = console.log;

// Let: block scoped variable
// const: block scoped constant

var globalVar = 'Frank';

// block
if (true) {
  var blockVar = 'Frank from block';
}

// function scope
(function anon() {
  var funcVar = 'Frank from func'; 
  log('inside', anon.name, globalVar);
})();


log(globalVar);
log(blockVar);
// console.log(funcVar);

