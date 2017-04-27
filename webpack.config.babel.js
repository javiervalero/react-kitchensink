import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => ({

	context: path.resolve(__dirname, 'src'),

  devtool: 'cheap-module-eval-source-map',

	entry: './features/todoList/index.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},


  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
          {
            loader: 'babel-loader',
            options: {
              compact: false
            }
          }
        ]
			},
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      }
		]
	}

});
