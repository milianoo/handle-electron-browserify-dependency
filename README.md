# Handle browserify in Electron app and Browser

I have created this repository, as I was developing an app for browsers and then it was required to port the app to electron (node) environment. The goal was to keep the same source of code for both electron app and browser app, however there was some problem in using the browserify that I thought it is good to share with others. 

### What was the problem ? 

- Browserify requires different commands for bundling the app in Electron and Browsers
- In electron, we required to have some modules that does not exist in browsers, such as node filesystem `var fs = require('fs');`
- There was some modules that were required in electron, and some in browsers, therefore some kind of dependency injection was required.

### How to try 

To build for browser in the `app.js` set the environment variable to your desired environment `browser`
or `node`. for sure this can be managed by a task runner (gulp, grunt, ...)

then 'npm run-script bundle_render' to bundle the rendering source of electron or `npm run-script bundle_browser` to bundle the source for browsers. 

both bundles will produce two files `app.bundle.js` and `browser.bundle.js` which should be referenced properly in the index.html. (again for sure this also can be done using task runners)

finally, to view the electron app, run `npm start` and to view the html in browser just open the index.html in the browser to see the result. 

Thanks for reading this, and feel free to provide your feedback if you know a better way.
