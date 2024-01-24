class BuildVersionWebpackPlugin {
  static defaultOptions = {
    fileName: 'buildVersion.txt',
  };

  constructor(options) {
    this.options = { ...BuildVersionWebpackPlugin.defaultOptions, ...options }
  }

  apply(compiler) {
    // 可以从编译器对象访问 webpack 模块实例
    // 并且可以保证 webpack 版本正确
    const { webpack } = compiler
    // 获取 Compilation 后续会用到 Compilation 提供的 stage
    const { Compilation } = webpack
    const { RawSource } = webpack.sources
    // 绑定到 “thisCompilation” 钩子，
    // 以便进一步绑定到 compilation 过程更早期的阶段
    compiler.hooks.thisCompilation.tap('BuildVersionWebpackPlugin', (compilation) => {
      const content = `Name: ${this.options.name} Version: ${this.options.version}  BuildTime: ${new Date().toLocaleString('chinese',{hour12:false})}\n`
      // 向 compilation 添加新的资源，
      // 这样 webpack 就会自动生成并输出到 output 目录
      compilation.emitAsset(
        this.options.fileName,
        new RawSource(content)
      );
    })
  }
}

module.exports = BuildVersionWebpackPlugin;
