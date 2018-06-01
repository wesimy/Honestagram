
const { injectBabelPlugin, compose } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    // config = rewireLess.withLoaderOptions({
    //     modifyVars: {
    //         '@primary-color': '#fad251',
    //         '@secondary-color': '#9c342e',
    //         '@text-color': '#222222',
    //         '@text-color-secondary': '#9c342e',
    //         '@heading-color': '#222222',
    //         '@layout-header-background': '#ffffff',
    //         '@btn-primary-bg': '#fad251',
    //         '@btn-primary-color': '#9b5d23',
    //         '@body-background': '#f5f5f5',
    //         '@component-background': '#fff',
    //         '@border-radius-base': '0px',
    //         '@border-radius-sm': '0px',
    //         '@font-family': '\"Open Sans\", @font-family-no-number'
    //     },
    // })(config, env);

    return config;
}
