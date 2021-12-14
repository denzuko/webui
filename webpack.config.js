const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const WebpackPluginPWAManifest = require('webpack-plugin-pwa-manifest');
const VueLoaderPlugin  = require('vue-loader/lib/plugin');

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  devtool: false || "inline-source-map",

  module: {
    rules: [
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.s?(c|a)ss$/, use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.(png|svg|jpe?g|gif)$/, use: [ 'file-loader' ] }
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({ extractComments: false })
    ],
    splitChunks: { chunks: 'all' }
  },

  target: ['web', 'es6'], 

  plugins: [
    new CleanWebpackPlugin(),

    new WebpackObfuscator({ rotateStringArray: true }),

    new VueLoaderPlugin(),

    new HtmlWebPackPlugin({
        inject: true,
        template: 'src/index.html',
        filename: 'index.html'
    }),

    new WebpackPluginPWAManifest()
  ],

  resolve: {
    extensions: [".js", '.vue'],
    alias: {
      // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
      // TODO: Add configuration for production builds.
      "vue$": "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, 'src'),
      "components": path.resolve(__dirname, "src/components"),
      "images": path.resolve(__dirname, "src/assets/images"),
    }
  },

  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
  },
};
