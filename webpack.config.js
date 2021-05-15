const path = require("path");

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
                type: 'asset/resource',
                use: [
                    {
                        loader: 'url-loader',
                        //options: {
                        //    limit: 10000,
                        //    name: 'images/[name]-[hash].[ext]'
                        //}
                    }
                ]
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
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
    },
};
