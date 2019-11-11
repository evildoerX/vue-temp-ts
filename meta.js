module.exports = {
  helpers: {
    if_or: function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },

  prompts: {
    name: {
      type: "input",
      required: true,
      message: "文档名称"
    },
    desc: {
      type: "input",
      required: true,
      message: "文档说明"
    },
    author: {
      type: "input",
      message: "文档作者"
    }
  },

  filters: {
    //根据命令行交互的结果过滤将要渲染的项目文件
  }
};
