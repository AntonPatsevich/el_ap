const path = require ('path');
const url = require('url');
const {app, BrowserWindow}= require ('electron');
const { PassThrough } = require('stream');

let win;
function createWindow(){
    
win = new BrowserWindow(
    {width: 700, 
    height: 500, 
        icon: __dirname + "/img/icon.jpg"});

        
        win.loadURL(url.format({pathname:path.join(__dirname, 'index.html'),
        
        protocol: 'file',
        slashes:true
    }));
    win.on('closed',() => {
    win = null;
    });
    win.webContents.openDevTools();

}
app.on('ready', createWindow);
app.on('window-all-closed', () => {app.quit();});