const electron = require('electron');

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

let mainWindow;

function createWindow() {

    const width = 800;
    const height = 600;

    mainWindow = new BrowserWindow({
        height,
        width
    });
    mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => mainWindow = null);

}

app.on('ready', createWindow);
app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {

        app.quit();

    }

});

app.on('activate', () => {

    if (mainWindow === null) {

        createWindow();

    }

});
