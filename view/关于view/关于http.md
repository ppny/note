### 浏览器缓存的请求头

强缓存
Expires
Cache-Control

协商缓存
Etag If-Not-Match
Last-Modified If-Modified-Since
浏览器会根据 http response header 中的 Expires 和 cahe-control 字段判断是否命中强缓存，如若命中，则直接从缓存中取资源，不会再去向服务器请求了。否则（没有命中强缓存），浏览器会发出一个条件请求，浏览器会在请求头中包含 If-Modified-Since 或 If-None-Match 字段，If-Modified-Since 即浏览器当初得到的 Last-Modified；If-None-Match 即浏览器当初得到的 ETag。当服务器发现资源的更新时间晚于 If-Modified-Since 所提供的时间，或者资源在服务器端当前的 ETag 和 If-None-Match 提供的不符时，说明该资源需要向服务器重新请求了。否则，浏览器将不需要重新下载整个资源，只需要从缓存中去加载这个资源，这时响应的 http code 为 304（304 Not Modified）。

### http 和 https 的区别

1、https 协议需要到 ca 申请证书，一般免费证书较少，因而需要一定费用。

2、http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议。

3、http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。

4、http 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 http 协议安全。
