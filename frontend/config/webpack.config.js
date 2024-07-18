const path = require('path');
/* [S] */
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
/* [E] */

module.exports = function(env) {
    return {
        mode: "none",
        entry: path.resolve(`src/index.js`),
        output: {
            path: path.resolve('public'),
            filename: 'assets/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules:[{
                test: /\.js/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            }, {
                test: /\.(c|sa|sc)ss$/i,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }, 
                    'sass-loader'
                ]
            }, {
                test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
                type: 'asset/resource'
            }]
        },
        /* [S] */
        plugins: [
            new CaseSensitivePathsPlugin()                
        ],
        devtool: "eval-source-map",
        /* [E] */
        devServer: {
            host: '0.0.0.0',
            port: 9090,
            liveReload: true,
            compress: true,
            hot: false,
            /* [S] */
            proxy: [{
                context: ['/api'],
                target: 'http://localhost:8080'
            }]
            // proxy: {
            //     '/api': 'http://localhost:8080'
            // },
            /* [E] */
        }
    };
}