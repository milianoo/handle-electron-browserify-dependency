var dependency;
var environment = 'b';

if (environment === 'b'){
    dependency = require("./modules/b");
}
if (environment === 'a'){
    dependency = require("./modules/a");
}

console.log(dependency.name());
dependency.print();