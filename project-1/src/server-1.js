import {chooseRequire} from './routers/cars.route.js'
import {askPrompt} from '../../prompt/prompt.js'
console.clear()
console.log('\tMashinlar!\n1. BMW\n2. Mercedes-benz ');

const choose=askPrompt('\n>>>')

chooseRequire(+choose)
