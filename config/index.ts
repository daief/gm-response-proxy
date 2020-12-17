import { Configuration } from 'webpack';
import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import { GMPlugin } from './GMPlugin';
import pkg from '../package.json';
import globalVars from './less-variables';

const nodeEnv: Configuration['mode'] = process.env.NODE_ENV as any;

const config: Configuration = {
  mode: nodeEnv,
  entry: { index: path.resolve(__dirname, '../src/index') },
  // devtool: '',
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
                javascriptEnabled: true,
                globalVars: globalVars,
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
  externals: {
    vue: 'Vue',
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
        ['homepage', 'https://github.com/daief/gm-response-proxy'],
        ['homepageURL', 'https://github.com/daief/gm-response-proxy'],
        ['supportURL', 'https://github.com/daief/gm-response-proxy/issues'],
        [
          'updateURL',
          'https://cdn.jsdelivr.net/gh/daief/gm-response-proxy@main/dist/index.js',
        ],
        [
          'downloadURL',
          'https://cdn.jsdelivr.net/gh/daief/gm-response-proxy@main/dist/index.js',
        ],
        ['run-at', `document-start`],
        ['connect', 'cdn.jsdelivr.net'],
        [
          'require',
          'https://cdn.jsdelivr.net/npm/vue@3.0.0/dist/vue.global.js',
        ],
        // ['noframes', ''],
        ['grant', 'unsafeWindow'],
        ['grant', 'GM_setValue'],
        ['grant', 'GM_getValue'],
        ['grant', 'GM_log'],
        // ['grant', 'GM_xmlhttpRequest'],
        // ['grant', 'GM_addStyle'],
      ],
    }),
  ],
  optimization: {
    // 油猴要求脚本不能压缩
    minimize: false,
  },
};

// if (nodeEnv === 'production') {
//   config.optimization = {
//     minimize: false,
//   };
// }

export default config;
