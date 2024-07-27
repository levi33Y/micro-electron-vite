import {app} from "electron"
import {initTray,tray} from "./Tray";
import {createWindow} from "./main";

app.on('ready', () => {
    createWindow()

    initTray()
})