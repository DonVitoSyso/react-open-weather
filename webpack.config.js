const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
     entry: "./src/index.tsx",
     output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
     },
     resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
     },
     module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: {
                    loader: 'awesome-typescript-loader'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
     },
     plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CheckerPlugin()
     ]
}