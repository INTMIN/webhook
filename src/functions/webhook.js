const { app } = require('@azure/functions');
const expressApp = require('../express/index'); // 引入 Express 应用

// 将 Express 应用作为 Azure Functions 的处理器
app.http('webhook', {
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 支持的 HTTP 方法
    authLevel: 'anonymous',                  // 设置为匿名访问
    handler: expressApp                      // 处理器：指向 Express 应用
});