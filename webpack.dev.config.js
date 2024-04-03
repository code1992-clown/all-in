const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset'
            },

        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true, // 在生成文件之前清空 output 目录
    }
}