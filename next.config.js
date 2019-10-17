/* eslint-disable */
const path = require('path')
const withCss = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}

module.exports = withSourceMaps(withCss({
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]

      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    )

    config.resolve.alias['@utils'] = path.resolve(__dirname, 'universal/utils')
    config.resolve.alias['@hooks'] = path.resolve(__dirname, 'universal/hooks')
    config.resolve.alias['@screens'] = path.resolve(__dirname, 'universal/screens')
    config.resolve.alias['@components'] = path.resolve(__dirname, 'universal/components')

    return config
  }
}))
