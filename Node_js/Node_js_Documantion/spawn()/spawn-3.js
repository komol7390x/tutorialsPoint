const { spawn } = require('child_process');

const pythonProcess = spawn('python', ['my_script.py']);

// Python skriptiga ma'lumot yuboramiz
pythonProcess.stdin.write('hello from nodejs\n');
pythonProcess.stdin.write('another message\n');
pythonProcess.stdin.end(); // Ma'lumot yuborishni tugatamiz

// Python skriptidan javobni tinglaymiz
pythonProcess.stdout.on('data', (data) => {
    console.log(`Python stdout: ${data.toString()}`);
});

// Xatoliklarni tinglaymiz
pythonProcess.stderr.on('data', (data) => {
    console.error(`Python stderr: ${data.toString()}`);
});

// Python skripti tugaganda
pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
});

pythonProcess.on('error', (err) => {
    console.error('Failed to start Python process.', err);
});

console.log('Python script is running...');

// --------------------------------------------------------------

const { fork } = require('child_process');

const child = fork('child.js');

// Child'ga xabar yuborish
child.send({ msg: 'Salom, child!' });

// Child'dan kelgan xabarni olish
child.on('message', (data) => {
    console.log('Child javobi:', data);
});
