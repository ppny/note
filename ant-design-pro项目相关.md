## 基于 ant-design-pro 搭建项目遇到的问题

### 从 mock 切换到后台数据接口

- 关闭 mock

关闭 mock 的方法我们推荐采用环境变量，可以在 package.json 中设置：

```js
    "script": {
        "start": "roadhog server",
        "start:no-proxy":"NO_PROXY=true roadhog server"
    }
```

然后在.roadhmgrc.mock.js 中坐个判断即可：

```js
    const noProxy = process.env.NO_PROXY === 'true'
    ……
    export default noProxy ? {} : delay(proxy,1000)
```

- 运行项目

```js
    npm run start:no-proxy
```

通过这个命令运行项目，是关闭了 mock 的

- 设置自己的代理

在.roadhogrc 文件中添加如下配置,就可以正常访问'/api'前缀的接口了。

```js
    "proxy":{
        "/api":{
            "target":"http://test.oa.vcchina.com/api",
            "changeOrigin":true,
            "pathRewrite":{"^/api":""}
        }
    },
```
