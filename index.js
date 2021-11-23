// index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

function isToday(dateParameter) {
  var today = new Date();
  return dateParameter.getDate() === today.getDate() && dateParameter.getMonth() === today.getMonth();
}

var special = '';

if(isToday(new Date('01-01-2000'))){
   special = 'Happy birthday to me!!!';
}else if(isToday(new Date('02-21-2000'))){
   special = 'Happy birthday to my mother!!!';
}else if(isToday(new Date('03-01-2000'))){
   special = 'Happy birthday to my father!!!';
}else if(isToday(new Date('06-03-2000'))){
   special = 'Happy birthday to my brother!!!';
}else if(isToday(new Date('11-07-2000'))){
   special = 'Happy birthday to Tam-sensei!!!';
}else if(isToday(new Date('08-02-2000'))){
   special = 'Happy birthday to Trs!!!';
}else if(isToday(new Date('01-12-2000'))){
   special = 'Happy birthday to Buu!!!';
}else if(isToday(new Date('11-24-2000'))){
   special = 'Happy birthday to Cat!!!';
}else if(isToday(new Date('02-19-2000'))){
   special = 'Happy birthday to you!!!';
}

let DATA = {
  special: special,
  name: 'Ho Xuan Vinh',
  date: new Date().toLocaleDateString('en-FR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Europe/Stockholm',
  }),
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

async function action() {
  await generateReadMe();
}

action();