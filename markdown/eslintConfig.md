### vue-eslint-vscode ###

- 主要参考[资料](https://alligator.io/vuejs/eslint-vue-vetur/)

- 使用`vue init webpack myLearn`创建一个vue项目，eslint采用`Standard`模式，![图片](https://github.com/qingzhu1224/font-end-blog/blob/master/imgs/initVue.png)

- vscode中配置`File->Preferences->Settings`中设置`User Settings file`，![图片](https://github.com/qingzhu1224/font-end-blog/blob/master/imgs/vscodeVue.png)

      {
      "eslint.validate": [
          {
            "language": "vue",
            "autoFix": true
          },
          {
            "language": "html",
            "autoFix": true
          },
          {
            "language": "javascript",
            "autoFix": true
          }
        ]
      }
- 配置`保存`时，自动`格式化`

      {"eslint.autoFixOnSave": true,}

- 以上步骤就设置成功了。

### 问题排查 ###

- 参考[资料](https://segmentfault.com/q/1010000008374262)

- vscode不起作用需要检查下面

  - 工程根目录下的 .eslintrc.json 是否创建了

  - vscode 中 eslint 插件是否加载并且启用

  - vscode 的配置文件中 vue 文件是否关联到了 eslint

  - eslint 的 html 插件是否正确安装
  ！[图片](https://github.com/qingzhu1224/font-end-blog/blob/master/imgs/eslintFlag.png)