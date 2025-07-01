import {chooseRequire} from './routers/user.route.js'
import {askPrompt} from '../../prompt/prompt.js'
console.clear()
console.log('\tMenu\n\n1. Copy file\n2. Move file\n3. Show files\n');
const res=askPrompt('\n>>> ');
chooseRequire(+res);
