### 使用express库构建的电话本后端RESTful HTTP API
npm install<br>
npm start 启动应用。<br>
npm run dev 在生产环境下启动应用。使用nodemon监视文件更改，更改保存到源代码中的文件时，自动重启服务器。 ```npm install --save-dev nodemon```<br>
使用 VSCode插件 REST client 测试请求<br>

使用 Node 的cors 中间件解决跨域问题，允许来自其他源的请求。<br>

在post请求时使用中间件Json-parser访问数据。将请求的 JSON 数据转换为 JavaScript 对象，在调用路由处理程序之前附加到请求对象的 body 属性。```app.use(express.json())```<br>

使用中间件static，让express显示静态内容，即页面index.html和它获取的JavaScript等。```app.use(express.static('build'))``` 每当express收到一个HTTP GET请求时，它将首先检查build目录中是否包含一个与请求地址相对应的文件。如果找到了正确的文件，express将返回它。<br>

使用中间件[morgan](https://github.com/expressjs/morgan)记录Http请求。自定义token，从req.body中取得对象转为json字符串打印。<br>

连接前端，在package.json中流程化前端部署<br>