const path=require('path');
const currentTask = process.env.npm_lifecycle_event
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
let mode="development"
if(process.env.NODE_ENV==="production"){
    mode="production"
}
const config={
    output:{
        path:path.resolve(__dirname,'/dist'),
        filename:'index.bundle.js'
    },
    mode:mode,
    devServer:{
        port:3010,
        watchContentBase:true,
        contentBase:path.resolve(__dirname,'dist'),
        hot:true
    },
    devtool:"source-map",
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use:[
                   MiniCssExtractPlugin.loader ,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
plugins:[new MiniCssExtractPlugin()]
}
if (currentTask == "build") {
    config.mode = "production"
  }
module.exports=config