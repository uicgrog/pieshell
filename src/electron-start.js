const {app, BrowserWindow} = require("electron")
const path = require('path')
const url = require('url')

// Very barebones starter code. Expecting this to get
//  a little longer and more robust; this is just to
//  get it kicked off.
  function createWindow () {
    // Create the browser window.
	// Note: win size will effect the drop down menus!
    win = new BrowserWindow({width: 800, height: 600, transparent: true, frame: false, maximizable: false})
    
    // Load from our React instance
    const startURL = "http://localhost:3000";
    win.loadURL(startURL);

    // Open dev tools
	// Comment out dev tools to see transparent window
    win.webContents.openDevTools();
  }

  app.on('ready', createWindow)
