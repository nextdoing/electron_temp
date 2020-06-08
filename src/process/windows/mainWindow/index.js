import { BrowserWindow, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

class MainWindow {
    constructor(win) {
        // win代表electron窗口实例
        // win is this electron window instance
        this.win = win
    }

    initBrowserPage() {
        if (process.env.WEBPACK_DEV_SERVER_URL) {
            this.win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
            if (!process.env.IS_TEST) {
                // 开发环境下自启动开发者工具
                // start developer tools in the development environment
                this.win.webContents.openDevTools({ mode: 'detach' })
            }
        } else {
            createProtocol('app')
            this.win.loadURL('app://./index.html')
        }

        this.win.on('ready-to-show', () => {
            this.win.show()
        })

        this.win.on('closed', () => {
            this.win = null
        })
    }

    createWindow() {
        if (!this.win) {
            this.win = new BrowserWindow({
                width: 1000,
                height: 500,
                minWidth: 1000,
                minHeight: 500,
                useContentSize: true,
                show: false,
                webPreferences: {
                    // 设为false允许跨域
                    webSecurity: false,
                    nodeIntegration: true,
                    allowRunningInsecureContent: true,
                },
                // eslint-disable-next-line no-undef
                icon: `${__static}/favicon.ico`,
                frame: false
            })

            // 初始化浏览器页面
            this.initBrowserPage()

            // 设置窗口菜单
            this.setWindowMenu()
        }
    }

    setWindowMenu() {
        if (process.platform === 'darwin') {
            const template = [
                {
                    label: 'electron-template',
                    submenu: [{
                            role: 'about'
                        }, {
                            role: 'quit'
                        }]
                }]
            const menu = Menu.buildFromTemplate(template)
            Menu.setApplicationMenu(menu)
        } else {
            Menu.setApplicationMenu(null)
        }
    }
}

export default MainWindow
