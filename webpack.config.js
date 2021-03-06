var webpack = require('webpack');
var path = require("path");

var config = {
    entry: {
        app: [
            './src/datapointMatrix.js',
            './src/dpMatrix.controller.js',
            './src/styles.css',
            './src/edit.html',
            './src/view.html'
        ],
        vendor: ['angular-matrix']
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.html$/,
                loader: "html-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        })
    ]
};

module.exports = config;