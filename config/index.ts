import { Configuration } from 'webpack';
import path from 'path';
import { GMPlugin } from './GMPlugin';
import pkg from '../package.json';

const nodeEnv: Configuration['mode'] = process.env.NODE_ENV as any;

const config: Configuration = {
  mode: nodeEnv,
  entry: { index: path.resolve(__dirname, '../src/index') },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  output: {
    filename: '[name].js',
  },
  plugins: [
    new GMPlugin({
      scriptConfig: [
        ['name', 'Response Proxy'],
        ['namespace', 'http://tampermonkey.net/'],
        ['version', pkg.version],
        ['description', pkg.description],
        ['author', pkg.author.name],
        ['email', pkg.author.email],
        ['match', `*://*/*`],
        ['run-at', `document-start`],
        ['noframes', ''],
        ['grant', 'unsafeWindow'],
        ['grant', 'GM_setValue'],
        ['grant', 'GM_getValue'],
        ['grant', 'GM_log'],
      ],
    }),
  ],
};

export default config;
