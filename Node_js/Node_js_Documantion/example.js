const { fork } = require('child_process');

const child = fork('child.js');

// Child'ga xabar yuborish
child.send({ msg: 'Salom, child!' });

// Child'dan kelgan xabarni olish
child.on('message', (data) => {
    console.log('Child javobi:', data);
});
