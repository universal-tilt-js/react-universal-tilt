const env = require('yargs').argv.env;

const libraryName = 'react-universal-tilt';

let outputFile, mode, devtool;

if (env === 'build') {
  mode = 'production';
  outputFile = `${libraryName}.min.js`;
  devtool = false;
} else {
  mode = 'development';
  outputFile = `${libraryName}.js`;
  devtool = 'source-map';
}

const config = {
  mode,
  entry: `${__dirname}/src/index.js`,
  externals: ['react', 'universal-tilt.js'],
  devtool,
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: 'ReactTilt',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'global'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
