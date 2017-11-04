const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './assets/index.html',
    filename: 'index.html',
    // favicon: './assets/favicon.ico',
    inject: 'body',
});

module.exports = {
    // Entry Point
    entry: [
        './src/index.js',
    ],

    // Output
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    // Dev Server Setting
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
        host: '0.0.0.0',
        port: '8080',
    },

    // Import path setting
    resolve: {
        // Import search folder
        modules: [
            'src',
            'node_modules',
            'assets',
        ],
        // Import file without extensions
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.css',
            '.scss',
        ],
    },

    module: {
        rules: [
            // Load images with file loader
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            // Load js and jsx with babel loader
            {
                test: /\.js$|.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            // Sytle loading
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            camelCase: true,
                            importLoaders: 1,
                            localIdentName: '[path]__[name]__[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },

    plugins: [htmlWebpackPluginConfig],
};

