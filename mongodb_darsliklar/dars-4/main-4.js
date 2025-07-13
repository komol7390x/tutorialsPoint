if (app.get('env') === 'development') {
    console.log('Development rejimda ishlayapti');
}

if (app.get('env') === 'production') {
    console.log('Production rejimda ishlayapti');
}


// export NODE_ENV = production  windows

// --------------------------------------------------------------------
import { config } from 'config'

const port = config.get('port');
const dbHost = config.get('db.host');

console.log(`Server ${port}-portda ishlaydi`);
console.log(`DB host: ${dbHost}`);

// NODE_ENV = production node app.js
