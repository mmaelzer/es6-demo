// Arrows are a function shorthand using the `=>` syntax
const log = console.log;

// Old style
var doubles = [1,2,3,4,5].map(num =>
                              num * 2
);
console.log(doubles);

// Old style scoping
function Person(name, friends) {
  this.name = name;
  this.friends = friends;
}

Person.prototype.showFriends = () => {
  this.friends.forEach((friend) => {
    log(this.name, 'is friends with', friend);
  });
};


var mike = new Person('mike', ['bob', 'jim', 'al']);

mike.showFriends();
