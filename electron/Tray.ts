import { app,Tray,Menu ,nativeImage} from "electron"
import {getMainWindow, mainWindowIsExist} from "./main";

export let tray:Electron.Tray | null = null

export const initTray = () => {
    const iconPath = nativeImage.createFromPath('./public/tray.png')

    tray = new Tray(iconPath)

    const contextMenu = Menu.buildFromTemplate([
        {
            label: '打开应用', click: () => {
                mainWindowIsExist() && getMainWindow().show();
            }
        },
        { label: '退出应用', click: () => { app.quit() } },
    ])

    tray.setContextMenu(contextMenu)

    tray.setToolTip('Harbour')

    // tray.setTitle('This is my title')
}