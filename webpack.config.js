const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  //entry: "./style.scss",
  entry: './styles/sass/main.scss',
  module: {
    rules: [
      {
        test: /.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            //options: {
            //  //reloadAll: true
            //}
          },
          'css-loader', // translates CSS into CommonJS
          'postcss-loader',
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  externals: {
    react: "react" // Exclude react from webpack bundle
  }
};