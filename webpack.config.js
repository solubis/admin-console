var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.ts',
        'webpack-dev-server/client?http://localhost:3000'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    resolve: {
        alias: {
            modules: path.resolve(__dirname, 'src/modules')
        },
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './',
        hot: true
    }
};
