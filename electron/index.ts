import {app} from "electron"
import {initMenu,menu} from "./menu";
import {createWindow} from "./main";

app.on('ready', () => {
    createWindow()

    initMenu()
})