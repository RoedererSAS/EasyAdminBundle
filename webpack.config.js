var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('./src/Resources/public/')
    .setPublicPath('./')
    .setManifestKeyPrefix('bundles/easyadmin')

    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .enableSourceMaps(false)
    .enableVersioning(false)
    .disableSingleRuntimeChunk()
    .autoProvidejQuery()
        
    // copy select2 i18n files
    .copyFiles({
        from: './node_modules/select2/dist/js/i18n/',
        // relative to the output dir
        to: 'select2/i18n/[name].[ext]',
        // only copy files matching this pattern
        pattern: /\.js$/
    })

    .addEntry('app', './assets/js/app.js')
    .addEntry('app-rtl', './assets/js/app-rtl.js')
    .addEntry('bootstrap-all', './assets/js/bootstrap-all.js')
;

module.exports = Encore.getWebpackConfig();
