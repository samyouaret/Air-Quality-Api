const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.testing') });
console.log(process.env);
jest.setTimeout(15000);