const { askPrompt } = require('../prompt/prompt.js')
const { fork } = require('child_process')
console.log('\tMashinlar!\n1. BMW\n2. Mercedes-benz ');
// const choose:number=askPrompt('>>>')
const choose: number = 1
// ----------------------------------------------------------------------
function print(item:object):void{
    console.log(`Model: ${item.model}`);
    console.log(`Rangi: ${item.color}`)
    console.log(`Yili: ${item.year} year`) 
    console.log(`Narxi: ${item.price} $`) 
    console.log(`Kuzov: ${item.bodyType}`) ;
    console.log('---------------');
}
// ----------------------------------------------------------------------
if (choose == 1) {
    console.clear()
    try {
        const child = fork('./MERS.js');
        child.send({ message: 'mers' });
        child.on('message', (data: object) => {
            if (Object.keys(data) != 'watch:require') {
                data.forEach(element => {
                    print(element)
                });
            }
        });
        child.on('error', (err) => console.log(err));
    } catch (error) {
        console.log(`Not found ${error.message}`);
    }
}
// ----------------------------------------------------------------------
else if (choose == 2) {

} 
// ----------------------------------------------------------------------
else {
    console.log(`${choose} noto'g'ri soraov kiritildi :(`);

}