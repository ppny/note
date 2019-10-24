### require 和 import 的区别

> require 对应 module.export。在运行时加载，赋值操作。AMD Common.js
> import 对应 export 或者 export default，是解构过程，编译过程，要放在顶部。es6.要 bable 转义实现。无法在运行时加载模块在语法上，条件加载就不可能实现。

### 3 个 ajax 请求链式调用，后一个依赖前一个结果，每个的返回值都是 promise 对象，如何实现

> promise 的 then 方法
> await 和 async

### 跨域除了反向代理还有什么方式？

### Localstorage 的容量，超出了咋办

存不进去并报错（QuotaExceededError）

### await 和 async 翻译成 es5 你觉的是啥样的

### 快速排序

任意选取一个数作为关键数据，然后将比它小的都放左边，比它大的都放到右边，这个过程称为一趟快速排序。

### 深拷贝

### Event loop

### 从 js 切换到 ts 的障碍是什么？

### 跨域除了代理还可以怎么做

### let、const、var 的区别，块级作用域是什么？

var: 第一种场景，内层变量可能会覆盖外层变量。

```js
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}

f(); // undefined
```

第二种场景，用来计数的循环变量泄露为全局变量。

```js
var s = "hello";

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```

let 命令所声明的变量，只在 let 命令所在的代码块内有效。
不存在变量提升
不允许重复声明
暂时性死区

es5 函数作用域、全局作用域
es6 块级作用域
