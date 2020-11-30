import { Configuration } from 'webpack';
import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import TerserPlugin from 'terser-webpack-plugin';
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
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] },
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.less$/,
        exclude: /\.lazy\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
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
    new (VueLoaderPlugin as any)(),
    new GMPlugin({
      scriptConfig: [
        ['name', 'Response Proxy'],
        ['namespace', pkg.author.name],
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
        ['grant', 'GM_addStyle'],
      ],
    }),
  ],
};

if (nodeEnv === 'production') {
  config.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: true,
      }),
    ],
  };
}

export default config;
