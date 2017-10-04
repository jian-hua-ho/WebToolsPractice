const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/app.html',
    filename: 'app.html',
    inject: 'body',
});

module.exports = {
    entry: './src/app.js',

    output: {
        filename: 'app.bundle.js',
    },

    devServer: {
        disableHostCheck: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },

    plugins: [HtmlWebpackPluginConfig],
};

