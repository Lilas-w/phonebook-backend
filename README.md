使用express库，```npm install express```<br>
npm start 启动应用。<br>
npm run dev 在生产环境下启动应用，用nodemon监视文件更改，更改保存到源代码中的文件时自动重启服务器 ```npm install --save-dev nodemon```<br>
使用 VS Code REST client 插件测试请求<br>

中间件：在post请求时使用Json-parser访问数据。将请求的 JSON 数据转换为 JavaScript 对象，在调用路由处理程序之前附加到请求对象的 body 属性。```app.use(express.json())```<br>

中间件：使用中间件static，让express显示静态内容，即页面index.html和它获取的JavaScript等。```app.use(express.static('build'))``` 每当express收到一个HTTP GET请求时，它将首先检查build目录中是否包含一个与请求地址相对应的文件。如果找到了正确的文件，express将返回它。<br>

中间件：使用[morgan](https://github.com/expressjs/morgan)记录Http请求。自定义token，从req.body中取得对象转为json字符串打印。<br>

在package.json中流程化前端部署<br>