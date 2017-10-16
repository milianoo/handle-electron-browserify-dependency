var dependency;
var environment = 'browser';

if (environment === 'node'){
    dependency = require("./modules/b");
}
if (environment === 'browser'){
    dependency = require("./modules/a");
}

console.log(dependency.name());
dependency.print();