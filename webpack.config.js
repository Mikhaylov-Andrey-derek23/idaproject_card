const path = require('path');

module.exports = {
    entry : "./src/index.js",
    mode : "development",
    output :  {
        filename : "./main.js"
    },
    devServer : {
        contentBase : path.join(__dirname, "dist"),
        compress : true,
        port : 9000,
        watchContentBase : true,
        progress : true
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use : {
                    loader : "babel-loader"
                }
            },
            {
                test: /\.scss$/,
               use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]

            }
        ]
    }
}