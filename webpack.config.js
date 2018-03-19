var config = {
    entry: './public/assets/js/main.js',
    output : {
        path     : __dirname + "/public/dist",
        filename : 'compiled.dist.js'
    },
     
    devServer: {
       inline: true,
       port: 8080
    },
     
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
                 
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    }
 }
 
 module.exports = config;
 