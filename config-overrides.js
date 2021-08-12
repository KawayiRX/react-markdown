// import gfm from 'remark-gfm'

const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  // 在这里使用 customize-cra 里的一些函数来修改配置
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true // 或者true, true代表运用less
  }),

  addLessLoader({
    javascriptEnabled: true,
    lessOptions: {
      modifyVars: {
        '@primary-color': '#fff' // for example, you use Ant Design to change theme color.
      }
    }
  }),

  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.node = {
      fs: 'empty'
    }

    config.resolve.extensions.unshift('.md')
    config.resolve.extensions.unshift('.mdx')

    const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf

    loaders.unshift({
      test: /\.mdx?$/,
      use: [
        'babel-loader',
        {
          loader: '@mdx-js/loader'
        }
      ]
    })

    return config
  }
)
