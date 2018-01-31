# 关于react的那些事儿
## 如果你能够改进React的一样功能，那会是哪一个功能？
* react存在一个问题，当state更新时，如果数据没变，也会去做virtual dom的diff,这就会产生浪费。

### 为什么要在React.js中使用Immutable 
> react使用了虚拟dom，virtual dom通过diff修改都没，来实现高效的dom更新。
> react存在一个问题，当state更新时，如果数据没变，也会去做virtual dom的diff,这就会产生浪费。

####  immutable.js
##### 什么是Immutable Data
> Immutable Data是指一旦被创造后，就不可以被改变的数据。

> 通过使用Immutable Data, 可以让我们更容易的去处理缓存、回退、数据变化检测等问题，简化我们的开发。

> 对Immutable对象的任何修改或添加删除操作都会返回一个新的Immutable对象。Immutable实现的原理是Persistent Data Structure(持久化数据结构)，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免deepCopy把所有节点都复制一遍带来的性能损耗，Immutable使用了Structual Sharing(结构共享),即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其他节点进行共享。。

> javascript中的对象一般是可变的（Mutable）,因为使用了引用赋值，新的对象简单的引用了原始对象，改变新的对象将影响到原始对象。

### PureComponent是什么