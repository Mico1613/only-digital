const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
	const isDevelopment = argv.mode === "development";

	return {
		entry: "./src/index.tsx",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bundle.[contenthash].js",
			clean: true,
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js", ".jsx"],
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.module\.scss$/i,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								modules: true,
								importLoaders: 1,
							},
						},
						"sass-loader",
					],
				},
				{
					test: /\.scss$/,
					exclude: /\.module\.scss$/,
					use: [
						isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader",
					],
				},
				{
					test: /\.css$/,
					use: [
						isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
						"css-loader",
					],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./public/index.html",
			}),
			new MiniCssExtractPlugin({
				filename: "[name].[contenthash].css",
			}),
		],
		devServer: {
			static: "./dist",
			port: 3000,
			hot: true,
			open: true,
		},
	};
};
