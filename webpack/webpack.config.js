const path = require('path');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js', './src/prova.js'],
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          liveReload: true,
      },
    plugins : [
      
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]       
    }
};