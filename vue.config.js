// vue.config.js
module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;

        return options;
      });
  }
};
