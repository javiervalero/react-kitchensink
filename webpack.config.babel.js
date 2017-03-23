import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => ({

	context: path.resolve(__dirname, 'src'),

	entry: './js/app.jsx',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].jsx'
	},

  devtool: 'inline-source-map',

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
