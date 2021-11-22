const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBarPlugin = require("webpackbar");

module.exports = (env, argv) => ({
    mode: env.production ? 'production' : 'development', // 从 env 参数获取 mode

    devtool: env.production ? false : 'eval-cheap-source-map', // 开发环境需要 source map

    entry: './src/index.ts', // 指定构建入口文件

    output: {
        path: path.resolve(__dirname, 'dist'), // 指定构建生成文件所在路径
        filename: 'bundle.js', // 指定构建生成的文件名
    },

    devServer: {
        static: path.resolve(__dirname, 'dist') // 开发服务器启动路径
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            minify: { // 压缩 HTML 的配置
                minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
                minifyJS: true, // 压缩 HTML 中出现的 JS 代码
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true, // 和上一个配置配合，移除无用的空格和换行
            }
        }),
        new WebpackBarPlugin({
            name: 'JZZZMJ',
            color: '#52c41a'
        })
    ],

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
})
