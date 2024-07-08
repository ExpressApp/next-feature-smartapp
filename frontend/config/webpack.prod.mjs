import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url'
import ZipPlugin from 'zip-webpack-plugin'
import GenerateJsonPlugin from 'generate-json-webpack-plugin' 
import smartappManifestJson from '../smartapp-manifest.json' assert { type: 'json' }
import packageJson from '../package.json' assert { type: 'json' }

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
    new GenerateJsonPlugin('smartapp-manifest.json', {
      ...smartappManifestJson,
      smartAppVersion: packageJson.version,
      bundlePath: `/bundle-${packageJson.version}.zip`,
    }),
    new ZipPlugin({
      filename: `bundle-${packageJson.version}.zip`,
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
