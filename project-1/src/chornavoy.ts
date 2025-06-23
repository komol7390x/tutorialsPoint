const { fork } = require('child_process');
const path = require('path');

const child = fork('child.js');

child.on('message', (data) => {
  console.log('Data received from child:\n', data);
  data.forEach((car, i) => {
    console.log(`${i + 1}. ${car.model} - $${car.price}`);
  });
});
child.send('getData');
