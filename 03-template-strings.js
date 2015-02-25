// Template strings provide syntactic sugar for building strings

const log = console.log;

let parent = 'mike';
let child = 'orson';

// Normal string building
log(parent + ' has a child named ' + child);

// Clever string building
log([child, 'has a child named', parent].join(' '));
