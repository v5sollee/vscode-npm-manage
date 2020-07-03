const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map', // inline-source-map
  entry: {
    // webview: path.resolve('src', 'webView.tsx'),
    extension: path.resolve('src', 'extension.ts'),
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: {
    vscode: 'commonjs vscode', // vscode-module是热更新的临时目录，所以要排除掉。 在这里添加其他不应该被webpack打包的文件, 📖 -> https://webpack.js.org/configuration/externals/
  },
  node: {
    fs: 'empty',
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
          // {
          //   loader: 'babel-loader',
          // },
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
};
