const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: "./src/script.js",
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"],
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                }, ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};