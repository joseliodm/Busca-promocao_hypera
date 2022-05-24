const {app, BrowserWindow, ipcMain} = require('electron');
const sanitizaMod = require('./sanitizaMod');
const rpaMod = require('./hyperapharma.js');

const urlOrigin = 'https://www.parceirohypera.com.br/Campanha';


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 700,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    mainWindow.loadFile('index.html');
    mainWindow.removeMenu();
}

ipcMain.on('canal1', (e, args) => {
    const argsFalso = [false, false, false, false, false];

    if (args === argsFalso) {
        console.log('Selecione um item');
        const item = 'Selecione um item de PESQUISA!';
    }else{
        let urlAlvo = [];

        if(args[0] === true){
            urlAlvo.push('/');
        }
        if(args[1] === true){
            urlAlvo.push('/');
        }
        if(args[2] === true){
            urlAlvo.push('/');
        }
        if(args[3] === true){
            urlAlvo.push('/');
        }
        if(args[4] === true){
            urlAlvo.push('/');
        }
        const urlSanitizada = sanitizaMod.url(JSON.stringify(urlAlvo));
        const urlFinal = urlOrigin + urlSanitizada;

        if (urlFinal === urlOrigin) {
            const item = 'Selecione um item de PESQUISA!';
            mainWindow.webContents.send('resultado', item);
        }else{
            const relatorio = sanitizaMod.relatorio(urlSanitizada);
            rpaMod(urlFinal, relatorio);
            
        }
    }
});

app.on('ready', () => {
    createWindow();
});