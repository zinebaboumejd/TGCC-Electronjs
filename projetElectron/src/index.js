const { createWindow } = require('./main')
const { app, BrowserWindow } = require('electron')
require('./db')

app.whenReady().then(createWindow)
app.allowRendererProcessReuse = false
