| 方法      | 返回值       | 是否忽略空位 |
| --------- | ------------ | ------------ |
| map()     | 处理后的数组 | 是           |
| forEach() | 无           | 是           |
| for 循环  | -            | 否           |

```js
var arr = [];
arr[0] = 0;
arr[5] = 5;
arr[8] = 8;
for (var i = 0; i < arr.length; i++) {
  console.log(i);
  // 结果
  // 0，1,2,3,4,5,6,7,8
}
console.log("*****");
var arr2 = arr.forEach((item, index) => {
  console.log(index);
  // 结果
  // 0,5,8（跳过了值为undefined的项）
  return item + "我是forEach";
});
console.log(arr2); // undefined（forEach没有返回值）
var arr3 = arr.map((item, index) => {
  console.log(index);
  // 结果
  // 0,5,8（跳过了值为undefined的项）
  return item + "我是map";
});
console.log(arr3); // 返回处理以后的数组
```
