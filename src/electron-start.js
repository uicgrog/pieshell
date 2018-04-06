const {app, BrowserWindow} = require("electron")
const path = require('path')
const url = require('url')

// Very barebones starter code. Expecting this to get
//  a little longer and more robust; this is just to
//  get it kicked off.
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})
    
    // Load from our React instance
    const startURL = "http://localhost:3000";
    win.loadURL(startURL);

    // Open dev tools
    win.webContents.openDevTools();
  }

  app.on('ready', createWindow)
