const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	mode: 'production',
	devtool: 'source-map',
	output: {
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true, implementation: require('sass') },
					},
				],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin()],
};
