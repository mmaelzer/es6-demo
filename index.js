// Clear window
process.stdout.write('\033c');

require('babel/register');
require('./utils/watcher');
