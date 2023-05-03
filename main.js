const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    // Créer la fenêtre du navigateur.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Charger l'application Angular.
    mainWindow.loadURL('http://localhost:4200');

    // Ouvrir les outils de développement.
    // mainWindow.webContents.openDevTools();

    // Fermer la fenêtre du navigateur quand la fenêtre Electron est fermée.
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// Lancer l'application quand Electron a fini de s'initialiser.
app.on('ready', createWindow);

// Quitter l'application quand toutes les fenêtres sont fermées.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});
