var fs = require('fs'),
configPath = './config/db.json';
var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
exports.dbConfig = parsed;
