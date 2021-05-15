const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
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
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            }
        ],
    },

    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                secure: false
            }
        },
        contentBase: path.join(__dirname, 'public')
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            minify: false,
            chunks: ['index']
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
};
