#!/usr/bin/env node
const CronJob = require('cron').CronJob;

function main() {
  cron('0 0 23 * * *', () => {
    console.log('say This server will shutdown at 24 o\'clock.')
  });
  cron('0 30 23 * * *', () => {
    console.log('say This server will shutdown at 24 o\'clock.')
  });
  cron('0 50 23 * * *', () => {
    console.log('say This server will shutdown at 24 o\'clock.')
  });
  cron('0 59 23 * * *', () => {
    console.log('say This server will shutdown in 1 minutes.')
  });
  cron('0 0 0 * * *', () => {
    console.log('save-all')
    setTimeout(() => {
      console.log('stop');
      process.exit(0);
    }, 5000);
  });
}

function cron(cronTime, onTick) {
  new CronJob(cronTime, onTick, null, true, 'Asia/Tokyo');
}

main();
