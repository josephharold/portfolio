const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
	watch: true, 
	mode: 'development',
	entry: {
		bundle: path.join(__dirname, 'src/scripts/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist' ),
		filename: 'bundle[contenthash].js',	
		clean: true
	},
	module:{
		rules: [
			{
				test: /\.css/i,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)/i,
				type: 'asset/resource'
			}
		]
	},
  plugins: [
		new HtmlWebPackPlugin({
			title: 'helloworld',
			filename: 'index.html',
			template: 'src/index.html'
		})
	]
}