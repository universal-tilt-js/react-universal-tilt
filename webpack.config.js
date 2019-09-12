module.exports = env => {
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

  return {
    mode,
    entry: `${__dirname}/src/index.tsx`,
    externals: ['react', 'universal-tilt.js'],
    devtool,
    output: {
      path: `${__dirname}/lib`,
      filename: outputFile,
      library: 'ReactTilt',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          resolve: {
            extensions: ['.tsx']
          }
        }
      ]
    }
  };
};
