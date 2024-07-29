import {app, Menu, nativeImage, Tray} from "electron"
import {getMainWindow, mainWindowIsExist} from "./main";

export let tray:Electron.Tray | null = null

const contextMenuItems = [
    {
        label: '打开应用', click: () => {
            mainWindowIsExist() && getMainWindow()?.show();
        }
    },
    {
        label: '退出应用', click: () => {
            app.quit()
        }
    },
]

export const initMenu = () => {
    initTray()
    initWinMenu()
    initPopupMenu()
    initDockMenu()
}

export const initTray = () => {
    const iconPath = nativeImage.createFromPath('./public/tray.png')

    const trayMenu = Menu.buildFromTemplate(contextMenuItems)

    tray = new Tray(iconPath)

    tray.setContextMenu(trayMenu)

    // tray.setToolTip('This is my toolTip')

    // tray.setTitle('This is my title')
}

export const initWinMenu = () => {
    const items = [
        {
            label: '',
            submenu: [
                {
                    label: '调试模式',
                    type: 'checkbox',
                    role: 'toggleDevTools'
                },
                {type: 'separator'},
                {
                    label: '退出',
                    onclick: () => {
                        app.quit()
                    }
                },
            ],
        },
        {
            label: '更多',
            submenu: [
                {
                    label: '单选菜单',
                    submenu: [
                        {label: '选项1', type: 'radio'},
                        {label: '选项2', type: 'radio'},
                        {label: '选项3', type: 'radio'},
                    ],
                },
                {
                    label: '多级菜单',
                    submenu: [
                        {
                            label: '二级菜单',
                            submenu: [
                                {label: '选项1', type: 'radio'},
                                {label: '选项2', type: 'radio'},
                                {label: '选项3', type: 'radio'},
                            ],
                        },
                    ],
                },
            ],
        },
    ]

    const winMenu = Menu.buildFromTemplate(items)

    Menu.setApplicationMenu(winMenu)
}

export const initPopupMenu = () => {
    const items = [
        {
            label: '退出应用',
            click: () => {
                app.quit()
            }
        }
    ]

    const popupMenu = Menu.buildFromTemplate(items)

    popupMenu.popup()

}

export const initDockMenu = () => {
    const items = [
        {
            label: '打开配置文件',
            click: () => {
            }
        }
    ]

    const {dock} = app

    const dockMenu = Menu.buildFromTemplate(items)

    dock.setMenu(dockMenu)
}
