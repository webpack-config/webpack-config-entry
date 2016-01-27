import partial from 'webpack-partial';
import nearest from 'find-nearest-file';
import path from 'path';
import {optimize} from 'webpack';

const targetData = (target) => {
  switch (target) {
  case 'node':
    return {
      output: {
        library: true,
        libraryTarget: 'commonjs2',
      },
    };
  case 'web':
    return {
      output: {
        publicPath: process.env.ASSET_URL || '/assets',
      },
    };
  default:
    return {};
  }
};

const normalize = (root, base) => {
  return base.charAt(0) === '/' ? base : path.join(root, base);
};

export default ({
  name,
  root = path.dirname(nearest('package.json')),
  output = path.join('dist', name),
}) => (config) => partial(config, {
  entry: {
    [name]: path.join(root, 'entry', `${name}.entry.js`),
  },
  context: root,
  // Output controls the settings for file generation.
  output: {
    filename: '[name].js',
    path: normalize(root, output),
    chunkFilename: '[id].js',
  },
  plugins: [
    new optimize.OccurenceOrderPlugin(true),
  ],
}, targetData(config.target));
