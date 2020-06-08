module.exports = {
    pluginOptions: {
        electronBuilder: {
            outputDir: 'dist_electron',
            builderOptions: {
                appId: 'com.liyq.express',
                productName: 'express',
                icon: './dist_electron/icons/icon.ico',
                files: [
                    '**/*',
                    'static/*'
                ],
                asar: true,
                directories: {
                    output: 'dist_install'
                },
                mac: {
                    icon: './dist_electron/icons/icon.icns',
                    target: [
                        'zip',
                        'dmg'
                    ]
                },
                win: {
                    icon: './dist_electron/icons/icon.ico',
                    target: [
                        'zip',
                        'nsis'
                    ]
                },
                nsis: {
                    oneClick: false,
                    allowElevation: true,
                    allowToChangeInstallationDirectory: true,
                    installerIcon: './dist_electron/icons/icon.ico',
                    uninstallerIcon: './dist_electron/icons/icon.ico',
                    installerHeaderIcon: './dist_electron/icons/icon.ico',
                    createDesktopShortcut: true,
                    createStartMenuShortcut: true,
                    shortcutName: 'express',
                    license: './LICENSE.txt'
                }
            }
        },
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    }
};
