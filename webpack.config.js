const path = require("path");
const copy = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const WebpackObfuscator = require('webpack-obfuscator');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s?(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            extractComments: false,
        }),
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new WebpackObfuscator({ rotateStringArray: true }),
    new CompressionPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
        inject: true,
        template: 'src/index.html'
    })
      /*,
    new copy({
        patterns: [
            {"from": "src/*", "to": "[name][ext]"}
        ]
    })*/
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
      // TODO: Add configuration for production builds.
      "vue$": "vue/dist/vue.esm.js",
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
