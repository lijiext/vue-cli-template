module.exports = {
  // 当前目录是项目根目录，所有规则启用
  root: true,
  env: {
    // 在 node 环境中启用
    node: true,
  },
  // 需要继承的基础配置
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  // 解析器
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  // 错误级别，0 off, 1 warn, 2 error
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "space-before-function-paren": "off",
  },
};
