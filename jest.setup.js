const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.testing') });
jest.setTimeout(30000);