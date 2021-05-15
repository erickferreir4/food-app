const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: "./public/favicon.png"
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
};
