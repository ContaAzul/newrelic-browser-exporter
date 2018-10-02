const cron = require('node-cron');
const DEFAULT_INTERVAL = '* * * * *';

function scheduler(task, interval = DEFAULT_INTERVAL) {
  if (task && typeof task === 'function') {
    cron.schedule(interval, task);
  }
}

module.exports = scheduler;