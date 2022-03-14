## 难点
使用express库，```npm install express```<br>
更改package.json中的scripts，以命令 npm start 启动应用。<br>
以npm run dev运行应用，使用nodemon监视文件更改，更改保存到源代码中的文件时自动重启服务器 ```npm install --save-dev nodemon```<br>
使用 VS Code REST client 插件测试<br>

请求单个资源时，id 变量是字符串 ，而data的 id 是整数，返回404 Not Found。 对请求的参数中的id使用Number()方法。<br>

中间件：在post请求时使用Json-parser访问数据。将请求的 JSON 数据转换为 JavaScript 对象，在调用路由处理程序之前附加到请求对象的 body 属性。```app.use(express.json())```<br>
在添加新person时，如果姓名/号码为空，或姓名已存在，则返回400 Bad Request和设置好的error message<br>

中间件：使用morgan记录Http请求。自定义token，从req.body中取得对象转为json字符串打印。