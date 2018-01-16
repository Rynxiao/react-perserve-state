var webpack = require('webpack');

module.exports = {
    devtool: '#eval-source-map',
    entry : {
        app : [
            // 'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr&timeout=20000',
            'webpack-hot-middleware/client?http://localhost:8080/',
            'webpack/hot/dev-server',
            './src/app.js'
        ]
    },
    output : {
        path : __dirname + '/assets/',
        filename : '[name].bundle.js',
        publicPath : '/'
    },
    module : {
        loaders : [
            { test : /\.js|\.jsx$/, exclude: /node_modules/, loader : 'babel' },
            { test : /\.css$/, loader : 'style!css' }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
    ]
};