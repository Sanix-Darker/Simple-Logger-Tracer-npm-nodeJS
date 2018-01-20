# createIfNotExist
Synchronous Node.JS function to simply create a file if it does not exist. If the file does exist, it will not be modified.


```shell
npm install create-if-not-exist --save
```

```javascript
var createIfNotExist = require("create-if-not-exist");

// File will be created if it does not exist.
// If the file does exist, it will not be modified.
createIfNotExist('file.txt','blablablabla');
```

## API

createIfNotExist(filename, data)
- **filename** - The name of the file
- **data** - The data to be written to the file
