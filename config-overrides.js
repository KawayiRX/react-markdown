const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    // 在这里使用 customize-cra 里的一些函数来修改配置
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true //或者true, true代表运用less
    }),

    addLessLoader({
        javascriptEnabled: true,
        lessOptions: {
            modifyVars: {
                '@primary-color': '#fff', // for example, you use Ant Design to change theme color.
            },
            cssLoaderOptions: {
                modules: true
            }, // .less file used css-loader option, not all CSS file.
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
    }),
);