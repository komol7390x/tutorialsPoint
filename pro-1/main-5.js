var askPrompt = require('../prompt/prompt.js').askPrompt;
var fork = require('child_process').fork;
console.log('\tMashinlar!\n1. BMW\n2. Mercedes-benz ');
// const choose:number=askPrompt('>>>')
var choose = 1;
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
        var child = fork('./MERS.js');
        child.send({ message: 'mers' });
        child.on('message', function (data) {
            if (Object.keys(data) != 'watch:require') {
                data.forEach(function (element) {
                    print(element);
                });
            }
        });
        child.on('error', function (err) { return console.log(err); });
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
