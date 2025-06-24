var askPrompt = require('../prompt/prompt.js').askPrompt;
var _a = require('child_process'), fork = _a.fork, spawn = _a.spawn;
console.log('\tMashinlar!\n1. BMW\n2. Mercedes-benz ');
var choose = askPrompt('>>>');
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
    try {
        console.clear();
        console.log('BMW\n');
        var bmw = spawn('node', ['./BMW']);
        var result_1 = '';
        bmw.stdout.on('data', function (data) {
            result_1 += data.toString();
        });
        bmw.stderr.on('data', function (data) {
            console.error('Xatolik:', data.toString());
        });
        bmw.on('close', function () {
            try {
                var parsed = JSON.parse(result_1);
                parsed.forEach(function (item) { return print(item); });
            }
            catch (err) {
                console.error('JSON parse error:', err);
            }
        });
    }
    catch (error) {
        console.log("Error not found ".concat(error.message));
    }
}
// ----------------------------------------------------------------------
else {
    console.clear();
    console.log("".concat(choose, " => Invalid request entered :("));
}
