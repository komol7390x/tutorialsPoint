const { exec } = require('child_process');
exec('dir', (error, stdout, stderr) => {
    if (error) {
        console.log(`Xatolik ${error}`);
        return
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout ${stdout}`);
})