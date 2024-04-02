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
        generator:{
            asset: {
                publicPath: 'assets/',
        
                // 将静态资源输出到相对于 'output.path' 的指定文件夹中，webpack 5.67.0 后可用
                outputPath: 'cdn-assets/',
              }
        },
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg)$/,
                type:'asset'
            },
        
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs'),
        clean: true, // 在生成文件之前清空 output 目录
    }
}