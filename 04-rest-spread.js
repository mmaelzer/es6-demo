// default
const log = console.log;

(function(x=1, y='boop') {
    console.log(x, y);
})();

// rest

function restTest(firstArg, ...allOtherArgs) {
    console.log(firstArg);
    console.log(allOtherArgs);
}

// restTest('hello', 'is', 'it me you\'re', 'looking for');
// spread

// restTest(...['hello', 'is it me', 'boop'])

restTest('yo', 'there', 'cowboy', ...[1,2,3,4,5])
