# Handle browserify in Electron app and Browser

I have created this repository, as I was developing an app for browsers and then it was required to port the app to electron (node) environment. The goal was to keep the same source of code for both electron app and browser app, however there was some problem in using the browserify that I thought it is good to share with others. 

### What was the problem ? 

- Browserify requires different commands for bundling the app in Electron and Browsers
- In electron, we required to have some modules that does not exist in browsers, such as node filesystem `var fs = require('fs');`
- There was some modules that were required in electron, and some in browsers, therefore some kind of dependency injection was required.


