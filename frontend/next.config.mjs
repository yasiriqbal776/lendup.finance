import BundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})


import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {

  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,

  webpack: (webpackConfig) => {

    // From https://github.com/rustwasm/wasm-pack/issues/835#issuecomment-772591665
    webpackConfig.experiments = {
      syncWebAssembly: true,
      layers: true, // Enable module and chunk layers
    }

    webpackConfig.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/sync',
    })
    return webpackConfig
  },
}

export default withBundleAnalyzer(withVanillaExtract(nextConfig))