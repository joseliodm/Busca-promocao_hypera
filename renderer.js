const {ipcRenderer} = require('electron');

document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();
    
    let proi3 = document.querySelector(".form-check-inputi3").checked;
    console.log([proi3]);
    ipcRenderer.send('canal1', [proi3])
    
});
ipcRenderer.on('resultado', (e, item) => {
    const myNotification = new Notification('ALERTA', {
        body: item
    });
});