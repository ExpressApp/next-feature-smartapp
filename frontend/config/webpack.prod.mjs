import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  mode: 'production',
  entry: './app/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'main.[contenthash].js',
    clean: true,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'config/tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  performance: {
    hints: false,
  },
}
