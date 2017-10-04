const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: [
        './src/index.js',
    ],

    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        disableHostCheck: true,
        contentBase: path.join(__dirname, 'public'),
        host: '0.0.0.0',
    },

    module: {
        rules: [
            {
                test: /\.js$|.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },

    plugins: [HtmlWebpackPluginConfig],
};

