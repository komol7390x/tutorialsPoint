const { fork } = require('child_process');
const child = fork('child.js');

child.on('message', (data) => {
    console.log(data);
    
});
child.send('getAllModelsMers')
