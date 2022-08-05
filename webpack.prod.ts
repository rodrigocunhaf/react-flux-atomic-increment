import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';

export default {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader' },
      {
        test: /\.m?tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local][ext]',
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...process.env,
        PUBLIC_PATH: './public',
      }),
    }),
    new CopyPlugin({
      patterns: [{ from: './public/assets', to: 'public/assets' }],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: '[path][name][ext]',
  },
};
