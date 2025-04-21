const express = require('express');
const app = express();

// 解析JSON格式的请求体
app.use(express.json());

// 解析URL编码的请求体
app.use(express.urlencoded({ extended: true }));

// GET方法处理
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

// POST方法处理
app.post('/webhook', (req, res) => {
    const headers = req.headers;
    const method = req.method;
    const params = req.body;
    
    const response = {
        headers,
        method,
        params
    };
    console.log(response)
    res.json(response);
});

// PUT方法处理
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

// DELETE方法处理
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

module.exports = app;