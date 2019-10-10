// 将要改变this指向的方法挂到目标this上执行并返回
var student = {
  name: '小明',
  age: '16',
};
function printName (year, month) {
  console.log (`${this.name}出生于${year - this.age}年${month}月`);
}
Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError ('not funciton');
  }
  var context = context || window;
  context.fn = this;
  const arg = [...arguments].slice (1);
  return context.fn (...arg);
};
Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError ('not funciton');
  }
  var context = context || window;
  context.fn = this;
  const arg = arguments[1];
  return context.fn (...arg);
};

// 闭包和apply方法实现bind
Function.prototype.myBind = function (context) {
  const self = this;
  if (typeof this !== 'function') {
    throw new TypeError ('not funciton');
  }
  return function (year, month) {
    self.call (context, ...arguments);
  };
};
printName.call (student, 2019, 8);
printName.myCall (student, 2019, 9);
printName.apply (student, [2019, 10]);
printName.myApply (student, [2019, 10]);
printName.bind (student) (2019, 8);
printName.myBind (student) (2019, 8);

var Person = function (name, age) {
  this.name = name;
  this.age = age;
};
var p1 = new Person ('红色', 20);
console.log (p1 instanceof Person);
