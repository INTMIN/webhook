const express = require('express');
const app = express();

// 设置解析请求体的中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET 方法处理
app.get('/webhook', (req, res) => {
    const headers = req.headers;
    const method = req.method;
    const params = req.params;

    const response = {
        headers,
        method,
        params
    };

    res.json(response);
});

// POST 方法处理
app.post('/webhook', (req, res) => {
    const headers = req.headers;
    const method = req.method;
    const params = req.body;

    const response = {
        headers,
        method,
        params
    };

    res.json(response);
});

// PUT 方法处理
app.put('/webhook', (req, res) => {
    const headers = req.headers;
    const method = req.method;
    const params = req.body;

    const response = {
        headers,
        method,
        params
    };

    res.json(response);
});

// DELETE 方法处理
app.delete('/webhook', (req, res) => {
    const headers = req.headers;
    const method = req.method;
    const params = req.body;

    const response = {
        headers,
        method,
        params
    };

    res.json(response);
});

// 导出 Express 应用
module.exports = app;
