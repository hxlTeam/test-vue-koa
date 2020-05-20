class CopyrightWebpackPlugin {
  constructor(options){
    console.log('我是Copyright-Webpack-Plugin',options);
    this.versions = options.versions;
  }

  // compiler:是webpack实例
  apply(compiler) {
    const that = this;
    // hooks.emit 定义在某个时刻
    
    compiler.hooks.emit.tapAsync( // tapAsync异步执行
      'CopyrightWebpackPlugin',
      (compilation, cb) => { // compilation:是本次打包的信息
        // console.log(compilation.assets,'==');
        compilation.assets['versions.json'] = {
          source: function () {
            return `{"versions": ${+that.versions}}`;
          },
          size: function () {
            return 1024;
          }
        };
        cb();
      }
    )

    // compiler.hooks.emit.tap( // tap同步执行
    //   'CopyrightWebpackPlugin',
    //   (compilation) => {
    //     console.log('==compilation==');
    //   }
    // )

  }
}

module.exports = CopyrightWebpackPlugin;