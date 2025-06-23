const { fork } = require('child_process');

function getDataFromChild() {
  return new Promise((resolve, reject) => {
    const child = fork('child.js');
    child.on('message', (data) => {        
      return resolve (data)

    });

    child.on('error', (err) => {
      reject(err);
    });

    child.send('salom')
  });
}


async function run() {
  try {    
    const data = await getDataFromChild();
    console.log('Mercedes from child:', data);    
  } catch (e) {
    console.error('Xato:', e);
  }
}

run();
