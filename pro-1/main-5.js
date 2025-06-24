var askPrompt = require('../prompt/prompt.js').askPrompt;
var _a = require('child_process'), fork = _a.fork, spawn = _a.spawn;
console.log('\tMashinlar!\n1. BMW\n2. Mercedes-benz ');
// const choose:number=askPrompt('>>>')
var choose = 2;
// ----------------------------------------------------------------------
function print(item) {
    console.log("Model: ".concat(item.model));
    console.log("Rangi: ".concat(item.color));
    console.log("Yili: ".concat(item.year, " year"));
    console.log("Narxi: ".concat(item.price, " $"));
    console.log("Kuzov: ".concat(item.bodyType));
    console.log('---------------');
}
// ----------------------------------------------------------------------
if (choose == 1) {
    console.clear();
    console.log('Mercedes-benz\n');
    try {
        var mers = fork('./MERS.js');
        mers.send({ message: 'mers' });
        mers.on('message', function (data) {
            if (Object.keys(data) != 'watch:require') {
                data.forEach(function (element) {
                    print(element);
                });
            }
        });
        mers.on('error', function (err) { return console.log(err); });
    }
    catch (error) {
        console.log("Not found ".concat(error.message));
    }
}
// ----------------------------------------------------------------------
else if (choose == 2) {
}
// ----------------------------------------------------------------------
else {
    console.clear();
    console.log("".concat(choose, " => Invalid request entered :("));
}
