var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.reslove(__dirname,'dist')
        filename: "[name].js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './example/index.html'}
        ], {})
    ]

};
