const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 따로 css 파일을 빼는 loader
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
          },
          // autoprefixer를 쓰기 위한 postcss loader
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer")({
                    flexbox: true,
                    grid: true,
                    overrideBrowserslist: ["last 3 versions", "> 1%"],
                  }),
                ],
              },
            },
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style/app.css",
    }),
  ],
};
