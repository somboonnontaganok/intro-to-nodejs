const fs = require('fs ');
const os = require('os');

const data = fs.readFileSync('./examplle.txt'.toString('utf8'), 'utf8');
console.log(data);