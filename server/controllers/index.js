const fs = require('fs');
const path = require('path');
const baseName = path.basename(__filename);
const controllers = {};

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== baseName) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const controllerName = file.slice(0, file.length - 3);
    controllers[controllerName] = require(`./${file}`);
  });

module.exports = controllers;