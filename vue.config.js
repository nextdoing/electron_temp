module.exports = {
  pluginOptions: {
    electronBuilder: {
      outputDir: 'dist_electron',
      builderOptions: {
        appId: 'com.liyq.express',
        productName: 'express',
        icon: './app.ico',
        files: [
          '**/*',
          'static/*'
        ],
        asar: true,
        directories: {
          output: 'dist_install'
        },
        mac: {
          icon: './public/app.ico',
          target: [
            'zip',
            'dmg'
          ]
        },
        win: {
          icon: './public/app.ico',
          target: [
            'zip',
            'nsis'
          ]
        },
        nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          installerIcon: './public/app.ico',
          uninstallerIcon: './public/app.ico',
          installerHeaderIcon: './public/app.ico',
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
