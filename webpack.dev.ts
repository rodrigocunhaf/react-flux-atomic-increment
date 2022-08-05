import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

const hostname = new URL('/', 'http://localhost:3000');

export default {
  mode: 'development',
  entry: './src/index.tsx',
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
            localIdentName: '[local][ext]',
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
      {
        test: /\.html$/,
        loader: 'html-loader',
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
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...process.env,
        PUBLIC_PATH: hostname.origin,
      }),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve('public'),
    },
    compress: true,
    port: 3000,
  },
};
