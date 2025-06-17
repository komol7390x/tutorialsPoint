const { execFile } = require('child_process');
execFile('cal.exe', (error) => {
    if (error) {
        console.log(`Xatolik ${error}`);
    } else {
        console.log('Kalkulyator ishga tushdi');
    }
})