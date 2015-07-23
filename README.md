# electron-sample
How to start
---

install node.js or io.js


```bash
mkdir electron-sample
cd electron-sample
npm init #...<leave defaults or add specific values ...>

```

Add electron stuff packages...

```bash
npm install electron-prebuilt --save-dev
npm install electron-packager --save-dev
```

Add "helper" commands in package.json

```json

"scripts": {
  "start": "electron .",
  "debug": "electron --debug=5858 .",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

Add file main.js

```js
/// <reference path="typings/node/node.d.ts"/>
var app = require('app'); // Module to control application life.
var BrowserWindow = require('browser-window'); // Module to create native browser window.

// Report crashes to our server.
//https://github.com/hokein/electron-sample-apps/tree/master/crash-report
//require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Open the devtools.
  mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

});

```

Add index.html file

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple App!</title>
  </head>
  <body>
    <h1>Sample App with Electron</h1>
    We are using io.js
    <script>
      document.write(process.version)
    </script>
    and Electron
    <script>
      document.write(process.versions['electron'])
    </script>.
  </body>
</html>
```

start simple electron app
```bash
npm start
```
