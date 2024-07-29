import {BrowserWindow, ipcMain} from "electron"
import * as path from "node:path";

let win: Electron.BrowserWindow | null = null

export const createWindow = () =>
{
    win = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.resolve(__dirname, 'preload.js')
        },
    })

    win.loadURL("http://localhost:8888")

    // win.webContents.openDevTools()

    mainWindowListenEvents()
}

export const  mainWindowListenEvents = () =>  {
    ipcMain.on('win-min', () => {
        mainWindowIsExist() && win?.minimize()
    })

    ipcMain.on('win-max', () => {

        console.log(mainWindowIsExist)
        if (mainWindowIsExist()) {
            win?.maximize()

            win?.webContents.send('mainWindowIsMax', true)
        }
    })

    ipcMain.on('win-restore', () => {
        if (mainWindowIsExist()) {
            win?.unmaximize()

            win?.webContents.send('mainWindowIsMax', false)
        }
    })

    ipcMain.on('win-close', () => {
        mainWindowIsExist() && win?.hide()
    })

    ipcMain.on('win-open-devtool', () => {
        mainWindowIsExist() && win?.webContents.openDevTools()
    })
}

export const mainWindowIsExist = () => {
    return win && !win.isDestroyed()
}

export const getMainWindow = () => {
    return win
}


