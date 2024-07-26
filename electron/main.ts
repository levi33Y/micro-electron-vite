import {BrowserWindow,app} from "electron"

const createWindow = () =>
{
    const win = new BrowserWindow({ width: 800, height: 600 })

    win.loadFile('./index.html')

    win.webContents.openDevTools()
}

app.on('ready', () => {
    createWindow()
})

