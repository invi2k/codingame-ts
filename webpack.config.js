const webpack = require('webpack');
const join = require('path').join;

// for each game, add a new 'entry'
// [name] is replaced by the key in the entry object
module.exports = {
  entry: {
    'power-of-thor-episode-1': join(
      __dirname,
      'src/main',
      'power-of-thor-episode-1.ts'
    ),
    'chuck-norris': join(__dirname, 'src/main', 'chuck-norris.ts'),
  },
  output: {
    filename: '[name].ts',
    path: join(__dirname, 'out'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [{test: /\.ts$/, loader: 'awesome-typescript-loader'}],
  },
  plugins: [new webpack.DefinePlugin({isRunAtCodinGame: true})],
};
