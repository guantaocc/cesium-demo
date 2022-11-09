const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    publicPath: './',
    configureWebpack: {
        plugins: [
            // Copy Cesium Assets, Widgets, and Workers to a static directory
            new CopyPlugin([{ from: './node_modules/cesium/Build/Cesium/Workers', to: 'Workers' }]),
            new CopyPlugin([{ from: './node_modules/cesium/Build/Cesium/ThirdParty', to: 'ThirdParty' }]),
            new CopyPlugin([{ from: './node_modules/cesium/Build/Cesium/Assets', to: 'Assets' }]),
            new CopyPlugin([{ from: './node_modules/cesium/Build/Cesium/Widgets', to: 'Widgets' }]),
            new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('')
            })
        ],
        module: {
            unknownContextCritical: /^.\/.*$/,
            unknownContextCritical: false

        }
    },
    lintOnSave: false
}