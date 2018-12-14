const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './server/index.js',
    target: 'node',

    externals: [nodeExternals()],
    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            { test:/\.(s*)css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            //     use: [
            //     "style-loader", // creates style nodes from JS strings
            //     "css-loader", // translates CSS into CommonJS
            //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
            // ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'})
    ]

};

// { test:/\.(s*)css$/,
//     use: [
//     "style-loader", // creates style nodes from JS strings
//     "css-loader", // translates CSS into CommonJS
//     "sass-loader" // compiles Sass to CSS, using Node Sass by default
// ]
// },
// {
//     test: /\.js$/,
//         exclude: /node_modules/,
//     use: "babel-loader"
// }, {
//     test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
// },
// {
//     test: /\.(png|jp(e*)g|svg|gif|ico)$/,
//         use: [{
//     loader: 'url-loader',
//     options: {
//         limit: 10000, // Convert images < 8kb to base64 strings
//         name: 'images/[hash]-[name].[ext]'
//     }
// }]
// },
// {
//     test: /\.(ttf|eot|woff|woff2)$/,
//         use: {
//     loader: "file-loader",
//         options: {
//         name: "fonts/[name].[ext]",
//     },
// }
// }
