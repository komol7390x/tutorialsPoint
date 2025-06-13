let cp = require('child_process')
const os = require('os');
let progs = {
    list: os.platform() === 'win32' ? 'cmd' : 'ls',
    args: os.platform() === 'win32' ? ['/c', 'dir'] : []
};
let child = cp.spawn(progs.list);
child.stdout.on('data', (data) => {
    console.log(`data: \n${data}`);
})

// child.stderr.on('data', (data) => {
//     console.error(`Xatolik:\n${data}`);
// });