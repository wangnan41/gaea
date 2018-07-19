# 欢迎使用 Gaea 脚手架

------

一个基于webpack的vue单页面应用脚手架，源自京东APP/京东ME/京东M站等项目。


## 使用方法

``` bash
# 克隆本项目代码
git clone git@git.jd.com:lifeifan3/gaea.git

# 修改远程git库地址
git remote set-url origin 你的项目地址

# 切换到dev分支
git checkout dev

# 安装依赖包
npm install

# 抽离项目中用的第三方库

npm run dll (只需要执行一次，如果对全家桶依赖文件有修改，如果更改了webpack.dll.config.js 的库依赖新增或者删除，请重新执行一次)

# 启动本地调试服务器
npm run dev

# 构建
npm run build

# 构建并上传到测试服务器
npm run upload
```

* 文档 http://cf.jd.com/pages/viewpage.action?pageId=100878007
