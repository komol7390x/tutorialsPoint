var fork = require('child_process').fork;
var child = fork('child.js');
child.on('message', function (data) {
    console.log(data);
});
child.send('getAllModelsMers');
