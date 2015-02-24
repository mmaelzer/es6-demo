const exec = require('child_process').exec;
const path = require('path');
const clear = require('clear');
const colors = require('colors/safe');
const watch = require('watch');
const lock = require('./lock');

let runs = 0;

/**
 * @param {function}
 * @param {string}
 */
function node(unlock, file) {
  if (path.basename(__filename) === file) return unlock();
  if (path.extname(file) !== '.js') return unlock();
  let cmd = `babel-node ${file}`;

  clear();
  console.log(colors.blue('['+(++runs)+']❯ ') + colors.green(`${cmd}`));
  exec(cmd, (err, stdout, stderr) => {
    console.log(colors.white(stderr || stdout));
    unlock();
  });
}

watch.createMonitor('.', (monitor) => {
  monitor.on('created', lock(node));
  monitor.on('changed', lock(node));
});
