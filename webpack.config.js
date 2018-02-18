const nodeExternals = require('webpack-node-externals')
const path = require('path')

const loaders = [{
    test: /\.js$/,
    exclude:/(node_modules|bower_components)/,
    loader:'babel-loader',
    query:{
        presets:['es2015','react'],
    },
}]

const client = {
    entry : './src/client.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename:'bundle.js',
    },
    module:{
        loaders
    },
}

const server = {
    entry:'./routers/server.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'server.js',
    },
    module:{
        loaders
    },
    target:'node',
    externals:[nodeExternals()],
}

module.exports = [client,server]