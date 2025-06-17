const {spawn} = require('child_process');

const prog = {
    list: ['cmd', ['/c', 'dir']],
    copy: ['cmd', ['/c', 'copy file1.txt file2.txt']],
    folder: ['cmd', ['/c', 'mkdir new2_folder']]
};

const child = spawn(...prog.folder); // '...' bilan arrayni ajratamiz

child.stdout.on('data', (data) => {
    console.log(`Natija:\n${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`Xatolik:\n${data}`);
});

child.on('close', (code) => {
    console.log(`Jarayon tugadi. Kod: ${code}`);
});
