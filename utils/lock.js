module.exports = (fn) => {
  let locked = false;
  return function(...args) {
    if (locked) return;
    locked = true;
    fn(() => { locked = false; }, ...args);
  };
};
