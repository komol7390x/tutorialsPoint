const { askPrompt } = require('../prompt/prompt.js')
const { fork, spawn } = require('child_process')
console.log('\tMashinlar!\n1. BMW\n2. Mercedes-benz ');
const choose:number=askPrompt('>>>')
// ----------------------------------------------------------------------
function print(item: object): void {
    console.log(`Model: ${item.model}`);
    console.log(`Rangi: ${item.color}`)
    console.log(`Yili: ${item.year} year`)
    console.log(`Narxi: ${item.price} $`)
    console.log(`Kuzov: ${item.bodyType}`);
    console.log('---------------');
}
// ----------------------------------------------------------------------
if (choose == 1) {
    console.clear()
    console.log('Mercedes-benz\n');
    try {
        const mers = fork('./MERS.js');
        mers.send({ message: 'mers' });
        mers.on('message', (data: object) => {
            if (Object.keys(data) != 'watch:require') {
                data.forEach(element => {
                    print(element)
                });
            }
        });
        mers.on('error', (err) => console.log(err));
    } catch (error) {
        console.log(`Not found ${error.message}`)
    }
}
// ----------------------------------------------------------------------
else if (choose == 2) {
    try {
        console.clear();
        console.log('BMW\n');
        const bmw = spawn('node', ['./BMW']);
        let result = '';
        bmw.stdout.on('data', (data) => {
            result += data.toString()
        });
        bmw.stderr.on('data', (data) => {
            console.error('Xatolik:', data.toString());
        });
        bmw.on('close', () => {
            try {
                const parsed = JSON.parse(result);
                parsed.forEach(item => print(item))
            } catch (err) {
                console.error('JSON parse error:', err);
            }
        });
    } catch (error) {
        console.log(`Error not found ${error.message}`);

    }
}
// ----------------------------------------------------------------------
else {
    console.clear()
    console.log(`${choose} => Invalid request entered :(`);

}