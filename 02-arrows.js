// Arrows are a function shorthand using the `=>` syntax
const log = console.log;

// Old style
var doubles = [1,2,3,4,5].map(function(num) {
  return num * 2;
});


// Old style scoping
function Person(name, friends) {
  this.name = name;
  this.friends = friends;
}

Person.prototype.showFriends = function() {
  var self = this;
  this.friends.forEach(function(friend) {
    log(self.name, 'is friends with', friend);
  });
};


var mike = new Person('mike', ['bob', 'jim', 'al']);

mike.showFriends();
