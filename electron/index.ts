import {app} from "electron"
import {initMenu,tray} from "./Tray";
import {createWindow} from "./main";

app.on('ready', () => {
    createWindow()

    initMenu()
})