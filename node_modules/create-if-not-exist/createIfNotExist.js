var fs = require('fs');
var fileExists = require('file-exists');

module.exports = function(filename, data){
  if(!fileExists(filename)){
    fs.writeFileSync(filename, data);
  }
}
