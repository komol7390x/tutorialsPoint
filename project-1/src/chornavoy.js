var fork = require('child_process').fork;
var path = require('path');
var child = fork('child.js');
child.on('message', function (data) {
    console.log('Data received from child:\n', data);
    data.forEach(function (car, i) {
        console.log("".concat(i + 1, ". ").concat(car.model, " - $").concat(car.price));
    });
});
child.send('getData');
