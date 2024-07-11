import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import webpack from './webpack.dev.mjs'

export default {
  ...webpack,
  plugins: [
    ...webpack.plugins,
    new BundleAnalyzerPlugin(),
  ],
}
