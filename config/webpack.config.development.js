const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const createStyleLoaders = require('./webpack.less');

const styleLoaders = createStyleLoaders({ isDev: true });
// TODO 正式环境使用 MiniCssExtractPlugin

const developmentBaseConfig = {
  mode: 'development',
  resolve: {
    symlinks: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: {
    vscode: 'commonjs vscode', // vscode-module是热更新的临时目录，所以要排除掉。 在这里添加其他不应该被webpack打包的文件, 📖 -> https://webpack.js.org/configuration/externals/
  },
};

const extensionConfig = {
  target: 'node', // 打包对象设置为node,不再打包原生模块,例如 fs/path  TODO: webview是否单独设置为web?
  devtool: 'source-map', // inline-source-map
  entry: {
    extension: path.resolve('src', 'extension.ts'),
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2', // 设置打包内容已module.exports方式导出
  },
  plugins: [new FriendlyErrorsPlugin()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'eslint-loader',
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                module: 'es6', // override `tsconfig.json` so that TypeScript emits native JavaScript modules.
              },
            },
          },
        ],
      },
    ],
  },
  ...developmentBaseConfig,
};

const webViewConfig = {
  devtool: 'source-map', // inline-source-map
  entry: {
    webview: path.resolve('src', 'webView.tsx'),
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('src/view', 'webview.html'),
      filename: 'view/webview.html',
      chunks: ['react-lib', 'webview'],
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              // 因为webview 需要在 web环境运行,无法使用ts6的commonjs 这里需要覆盖 tsconfig
              compilerOptions: {
                module: 'esnext',
                target: 'es5',
              },
            },
          },
        ],
      },
      ...styleLoaders,
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        'react-lib': {
          chunks: 'all',
          test: /react|react-dom|loose-envify|object-assign|prop-types|scheduler/,
          name: () => {
            return 'lib/react-lib';
          },
          priority: 10,
        },
      },
    },
  },
  ...developmentBaseConfig,
};

module.exports = [extensionConfig, webViewConfig];
