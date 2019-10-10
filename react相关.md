# 关于 react 的那些事儿

## 如果你能够改进 React 的一样功能，那会是哪一个功能？

- react 存在一个问题，当 state 更新时，如果数据没变，也会去做 virtual dom 的 diff,这就会产生浪费。

### 为什么要在 React.js 中使用 Immutable

> react 使用了虚拟 dom，virtual dom 通过 diff 修改都没，来实现高效的 dom 更新。
> react 存在一个问题，当 state 更新时，如果数据没变，也会去做 virtual dom 的 diff,这就会产生浪费。

#### immutable.js

##### 什么是 Immutable Data

> Immutable Data 是指一旦被创造后，就不可以被改变的数据。

> 通过使用 Immutable Data, 可以让我们更容易的去处理缓存、回退、数据变化检测等问题，简化我们的开发。

> 对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure(持久化数据结构)，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structual Sharing(结构共享),即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其他节点进行共享。。

> javascript 中的对象一般是可变的（Mutable）,因为使用了引用赋值，新的对象简单的引用了原始对象，改变新的对象将影响到原始对象。

### PureComponent 是什么

通常，一个组件获取了新的 prop，React 就会重新渲染这个组件。但有时，新传入的 prop 并没有真正改变，React 还是触发重新渲染。
使用 PureComponent 可以帮助你避免这种重新渲染的浪费。例如，一个 prop 是字符串或布尔值，它改变后，PureComponent 会识别到这个改变，但如果 prop 是一个对象，它的属性改变后，PureComponent 不会触发重新渲染。

### react 中的 key

keys 可以在 DOM 中的某些元素在增加或删除的时候帮助 React 识别哪些元素发生了变化。
